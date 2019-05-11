let tblEleves = [
	{idEleve :1,nom:"prost",prenom:"Alain",notes:[
		{idNote:1,valeur:18 , coef:4 , matiere:"MATHS",dateExam:"18/02/2019"},
		{idNote:2,valeur:15 , coef:3 , matiere:"INFO",dateExam:"13/03/2019"},
		{idNote:3,valeur:12 , coef:3 , matiere:"ANGLAIS",dateExam:"15/03/2019"}
	
	]} ,
	{idEleve :2,nom:"Zidane",prenom:"Zinedine",notes:[
	    {idNote:4,valeur:20 , coef:4 , matiere:"MATHS",dateExam:"18/02/2019"},
		{idNote:5,valeur:19 , coef:3 , matiere:"INFO",dateExam:"13/03/2019"},
		{idNote:6,valeur:16 , coef:3 , matiere:"ANGLAIS",dateExam:"15/03/2019"}
	
	]} ,
	{idEleve :3,nom:"Schumacher",prenom:"Michael",notes:[
		{idNote:7,valeur:10 , coef:4 , matiere:"MATHS",dateExam:"18/02/2019"},
		{idNote:8,valeur:11 , coef:3 , matiere:"INFO",dateExam:"13/03/2019"},
		{idNote:9,valeur:12 , coef:3 , matiere:"ANGLAIS",dateExam:"15/03/2019"}
	
	
	]}
	,
	{idEleve :4,nom:"VETTEL",prenom:"SEBASTIAN",notes:[
		{idNote:10,valeur:20 , coef:4 , matiere:"MATHS",dateExam:"18/02/2019"},
		{idNote:11,valeur:20 , coef:3 , matiere:"INFO",dateExam:"13/03/2019"},
		{idNote:12,valeur:20 , coef:3 , matiere:"ANGLAIS",dateExam:"15/03/2019"}						
	
	]}
	,
	{idEleve :5,nom:"ALESI",prenom:"JEAN",notes:[
		{idNote:13,valeur:05 , coef:4 , matiere:"MATHS",dateExam:"18/02/2019"},
		{idNote:14,valeur:05 , coef:3 , matiere:"INFO",dateExam:"13/03/2019"},
		{idNote:15,valeur:05 , coef:3 , matiere:"PHP7",dateExam:"15/03/2019"}
	
	
	]}
	,
	{idEleve :6,nom:"VALBUENA",prenom:"JEAN",notes:[
		{idNote:16,valeur:05 , coef:4 , matiere:"MATHS",dateExam:"18/02/2019"},
		{idNote:17,valeur:05 , coef:3 , matiere:"INFO",dateExam:"13/03/2019"},
		{idNote:18,valeur:05 , coef:3 , matiere:"CHIMIE",dateExam:"15/03/2019"}
	
	
	]}
	,
	{idEleve :7,nom:"FEKIR",prenom:"NABIL",notes:[
		{idNote:19,valeur:05 , coef:4 , matiere:"MATHS",dateExam:"18/02/2019"},
		{idNote:20,valeur:05 , coef:3 , matiere:"JAVA",dateExam:"13/03/2019"},
		{idNote:21,valeur:05 , coef:3 , matiere:"BIO",dateExam:"15/03/2019"}
	
	
	]}
];


/**
 * Générer les lignes tr d'eleves dans un table
 * @param {*} tableauDeDonnees 
 * @param {*} composantGraphiqueParent 
 */
function GenerationTableauEleves(tableauDeDonnees , composantGraphiqueParent) {
	composantGraphiqueParent.empty();
	
	for(eleve of tableauDeDonnees)
	{
		$tr = $("<tr>"
			+ "<td>" + eleve.idEleve + "</td>"
			+ "<td>" + eleve.nom + "</td>"
			+ "<td>" + eleve.prenom + "</td>"
			+ "<td class='text-success'>"
			+ "<a href='#collapseNote' title='Voir les notes' class='btn btn-success btn-voir' data-ideleve='" + eleve.idEleve + "'" 
			+ "data-toggle='collapse' data-target='#collapseNotes'><i class='material-icons md-24'>notes</i></a> "	
			+ "<a href='#eleve' title='Modifier un élève' class='btn btn-warning btn-edit'"	
			+ "data-toggle='modal' data-target='#editEleveModal'><i class='material-icons md-24'>edit</i></a> "	  
			+ "<a href='#eleve' title='Supprimer un élève' class='btn btn-danger btn-delete'><i class='material-icons md-24'>delete_forever</i></a>"									
			+ "</td>"
			+ "</tr>");
	  

	composantGraphiqueParent.append($tr);
	}			
	
}

/**
 * Retourner un eleve par id sinon retourner undefined
 * @param {*} tableau 
 * @param {*} id 
 */
function RecupereElementDuTableau(tableau, id) {
	return tableau.find(elem => elem.idEleve == id);
}

/**
 * Retourner un eleve by id eleve
 * @param {*} id 
 */
function getEleveById(id) {
	let eleve = null;
	
	for(e of tblEleves) {			
		if(e.idEleve == id) {
			eleve = e;
		}
	}
	
	return JSON.stringify(eleve);
}


/**
 * Insérer une nouvelle ligne tr (eleve) dans un table
 * @param {*} valeurs 
 */
function insererLigneEleve(valeurs) {
	const {nom, prenom} = valeurs;
	
	let nbEleves = tblEleves.length + 1;
			
	if(nom !== "" && prenom .trim() !== "") {
		tdIdEleve = "<td>"+ nbEleves +"</td>";
		tdNom = "<td>"+ nom +"</td>";
		tdPrenom ="<td>"+ prenom +"</td>";
		
		tdActions =  "<td class='text-success'>";
		tdActions += "<a href='#collapseNote' title='Voir les notes' class='btn btn-success btn-voir' data-ideleve='" + nbEleves + "' data-toggle='collapse' data-target='#collapseNotes'><i class='material-icons md-24'>notes</i></a> ";
		tdActions += "<a href='#eleve' title='Modifier un élève' class='btn btn-warning btn-edit' data-toggle='modal' data-target='#editEleveModal'><i class='material-icons md-24'>edit</i></a>" ;
		tdActions += " <a href='#eleve' title='Supprimer un élève' class='btn btn-danger btn-delete'><i class='material-icons md-24'>delete_forever</i></a></td>";
		
		$tr = $("<tr data-toggle='collapse' data-target='#eleve_" + nbEleves +"' class='accordion-toggle'>" 
				+ tdIdEleve 
				+ tdNom 
				+ tdPrenom
				+ tdActions
				+ "</tr>");
		
		let eleve = null;
		
		eleve = { "idEleve": nbEleves, "nom": nom, "prenom": prenom, "notes": [] };
		
		// Ajouter cet nouvel eleve dans le tableau tblEleves
		tblEleves.push(eleve);
		
		return $tr;
	}
}


function GenerationTableauNotesDunEleve(eleve , composantGraphiqueParent) {
	// Vider le bloc notesTbody 
	composantGraphiqueParent.empty();

	let $tr = null;
		
	// Générer les lignes de notes
	for(note of eleve.notes) {
		$tr = $("<tr>"
				+ "<td>" + eleve.idEleve + "</td>"
				+ "<td>" + note.idNote + "</td>"
				+ "<td>" + note.matiere + "</td>"
				+ "<td>" + note.coef + "</td>"
				+ "<td>" + note.valeur +"</td>"
				+ "<td>" + note.dateExam +"</td>"						
				+ "</tr>");
		
		$tr.prependTo($("#notesTbody"));
	}
}

/**
 * Recuperer les notes d un eleve by id
 * @param {*} id 
 */
function getNotes(id) {
	const eleve = RecupereElementDuTableau(tblEleves, id);
	const notesEleve = eleve.notes;
	
	return JSON.stringify(notesEleve);
}

	
	
	
	
	
	

