/*** 
 * Recurso ainda não está recomendado, pois insere tudo o que está escrito no Label [dos formularios a partir do container 'page-register'] 
 * como placeholder nos campos de entrada dos formularios, contudo os Labels trazem caracteres indevidos e, 
 * em alguns casos, textos longos.
 * Mas a partir deste código desenvolvido pelo frontend Lincon [lider técnico de frontend da Tray eCommerce], 
 * poder-se-á melhorar o tratamento de caracteres para uso do script sem maiores problemas.
 * Seu uso fica a critério, neste repositorio fica em standby
 */

if(jQuery('html').hasClass('page-register')) {
    jQuery('fieldset label').each(function() {
        jQuery(this).find('input').attr('placeholder', jQuery(this).text());
    });
}
