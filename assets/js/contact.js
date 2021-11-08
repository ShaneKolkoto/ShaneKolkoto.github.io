function validate() {
      
    if( document.form.name.value == "" ) {
       alert( "Please provide your name!" );
       document.form.name.focus() ;
       return false;
    }
    if( document.form.email.value == "" ) {
       alert( "Please provide your Email!" );
       document.form.email.focus() ;
       return false;
    }
    if( document.form.subject.value == "" ) {
        alert( "Please provide your Subject!" );
        document.form.email.focus() ;
        return false;
     }
    if( document.form.message.value == "" ) {
       alert( "Please provide your message!" );
       return false;
    }
    else{
        alert( "Email was sent")
      //   Clear the form
        return( true )
    };
 }