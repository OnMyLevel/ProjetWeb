<template>
<div id="formHelper">
  <br>
  <h3> Stay in touch and please fill out our form ... </h3>
  <form action="/ma-page-de-traitement" method="post">
    <div>
        <label for="name">Your Name :</label>
        <input type="text" id="name" name="user_name">
    </div>
    <div>
        <label for="mail">Your e-mail :</label>
        <input type="text" id="mail" name="user_mail">
    </div>
    <div>
        <label for="msg">Your Message :</label>
        <textarea id="msg" name="user_message"></textarea>
    </div>
     <button class="buttonForm"> Send Email </button>
     <br>
     <br>
</form>
  <slot> </slot>
</div>
</template>

<script>
export default {
  data(){
    return {
        titre:'Form-Helper'
    }
  }
}
</script>
<style scoped>
#formHelper{
    text-align: center;
}
form {
  /* Uniquement centrer le formulaire sur la page */
  margin: 0 auto;
  width: 700px;
  height: 490px;
  /* Encadré pour voir les limites du formulaire */
  padding: 1em;
 /* border: 1px solid #CCC;*/
  border-radius: 1em;
}

form div + div {
  margin-top: 1em;
}

label {
  /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input, textarea {
  /* Pour s'assurer que tous les champs texte ont la même police.
     Par défaut, les textarea ont une police monospace */
  font: 1em sans-serif;

  /* Pour que tous les champs texte aient la même dimension */
  width: 600px;
  height: 40px;
  box-sizing: border-box;

  /* Pour harmoniser le look & feel des bordures des champs texte */
  border: 1px solid #999;
}

input:focus, textarea:focus {
  /* Pour souligner légèrement les éléments actifs */
  border-color: #000;
}

textarea {
  /* Pour aligner les champs texte multi‑ligne avec leur étiquette */
  vertical-align: top;

  /* Pour donner assez de place pour écrire du texte */
  height: 13em;
}

.button {
  /* Pour placer le bouton à la même position que les champs texte */
  padding-left: 90px; /* même taille que les étiquettes */
}

button {
  /* Cette marge supplémentaire représente grosso modo le même espace que celui
     entre les étiquettes et les champs texte */
  margin-left: .5em;
}
h3{
 text-align: center;
}

button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.buttonForm{
  margin-left: 45px;
  margin-top: 15px; 
  height: 50px;
	padding:6px 0 6px 0;
	font:bold 13px Arial;
	background: black;
	color:#fff;
	border-radius:0px;
	width:100%;
	border:none;
}
</style>