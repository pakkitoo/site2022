	
var  link_css  =  "estilo.css" ;
				
if ( getCookie2 ( )  ==  "contraste" ) {
	link_css  =  "css/contraste.css" ;  // se o valor do cookie obtido pela função getCookie2 for contrasts, a link_css recebe como folha de estilo contrastess
} else  if ( getCookie ( )  ==  "default" ) {
	link_css  =  "estilo.css" ;
}

$ ( documento ) . pronto ( função ( ) {
	
	$ ( "#contraste" ) . clique ( função ( ) {
		setCookie ( "contraste" ) ; //contraste é o nome do cookie criado e consequentemente o valor parâmetro setCookie. Ao clicar no link com id contrast, será definido o valor contrast para o cookie e ele irá executar a função getCookie2.
		localização . recarregar ( ) ;				
	} ) ;
	
	$ ( "#semcontraste" ) . clique ( função ( ) {
		setCookie ( "default" )
		localização . recarregar ( ) ;									
	} ) ;
	
} ) ;

//<link rel=stylesheet href="contraste.css" type=text/css>
$ ( "cabeça" ) . append ( "<link rel=stylesheet href=" +  " " +  link_css  + " "  + "type=text/css>" ) ; //altera a folha de estilo da página

função  setCookie ( valor ) {
	var  data  =  new  Date ( ) ;  //new Date() cria um novo objeto de dados com a data e hora atuais :
	dados . setTime ( dados.getTime ( ) + 600000 ) ; _ _ //O método setTime() define um dado e especifica a hora ou subtrai um número de milissegundos. getTime() retorna o número de milissegundos  
	
	//estrutura de cookies
	documento . cookie  =  "contraste=" + valor + "; expira=" + dados . toUTCString ( ) + "; caminho=/" ;  //caminho - caminho do cookie. path=/ - cookie disponível em todo o domínio.
	
	
}
//O método toUTCString() retorna um objeto de dados como uma string, de acordo com o UTC.
//Dica: o Universal Coordinated Time (UTC) é o horário definido pelo World Time Standard.
//Observação: o horário UTC é igual ao horário GMT.

função  getCookie ( ) {
	var  cookie  =  documento . biscoito . divisão ( "=" ) ;
	
	return  cookie [ 1 ] ;
}

function  getCookie2 ( ) {
var  nomeEQ  =  "contraste=" ;
var  ca  =  documento . biscoito . divisão ( ';' ) ; //armazena na variável ca um vetor ou matriz contendo uma string do cookie, ignorando o ponto-e-virgula. A saída (eu acho) seria mais ou menos isso: ca = ["contraste=contraste", expires="valor que corresponde à data e tempo que o cookie expira", path=/]
for  ( var  i  =  0 ;  i  <  ca. comprimento ; i ++ ) { _  
var  c  =  ca [ i ] ;  //cria um loop na matriz ca (i = 0; i <ca.length; i ++) e lê cada valor c = ca [i]).
while  ( c . charAt ( 0 )  ==  ' ' )  c  =  c . substring ( 1 ,  c . comprimento ) ;
if  ( c . indexOf ( nameEQ )  ===  0 )  return  c . substring ( nameEQ.comprimento , c.comprimento ) ; _  _ _ _
}
retornar  indefinido ;

}

