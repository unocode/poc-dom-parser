const EXEMPLO_XML = `
  <link rel="StyleSheet" type="text/css" href="/css/estilo.css">
  <link type="text/css" rel="stylesheet" href="/css/estimativa.css" />
  <script language="JavaScript" src="/js/jquery-1.4.3.min.js"></script>
  <script language="JavaScript" src="/js/ajax.js"></script>
  <script language="JavaScript" src="/js/global.js"></script>
  <script language="JavaScript" src="/js/ajax_runprocapp.js"></script>
  <script language="JavaScript" src="/js/mrbuscasinistro.js"></script>
  <script language="JavaScript" src="/js/mrregestima.js"></script>
  <HTML>
  <HEAD>
  <title>HDI Seguros</title>
  <link rel="StyleSheet" type="text/css" href="/css/estilos.css">
  <link rel="StyleSheet" type="text/css" href="/css/css.css">
  <link rel="StyleSheet" type="text/css" href="/css/estilo.css">
  <link rel="StyleSheet" type="text/css" href="/css/estilo_modal.css">
  <script language="JavaScript" src="/js/global.js"></script>
  </HEAD>
  <body bgcolor="F2F2F2" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" >
  <table align="center" width="776" style="border-top: 2px #4D645C; border-right: 1px #4D645C; border-left: 1px #4D645C; border-bottom: 4px #4D645C; border-style:solid; font-family: Arial, Helvetica, sans-serif; color: #FFFFFF; " cellpadding="0" cellspacing="0">
  <tr><td><table id="id_header_principal" border="0" bgcolor="#FFFFFF" align="center" width="770" style="font-family: Arial, Helvetica, sans-serif; color: FFFFFF; " cellpadding="0" cellspacing="0"><tr><td><table id="id_header_logos" border="0" bgcolor="FFFFFF" cellpadding="0" cellspacing="0" bgcolor=""><tr><td align="left" width="776"><div class="topo"><ul class="barra_topo"><li class="flutua_para_direita" style="cursor:hand" onclick="window.opener=self; self.close();"><img src="/images/sair.gif" alt="Sair" class="link_imagem" /></li><li id="id_header_principal_ola_cor"><span class="texto_branco">Olá LUCIANA SANTIAGO COELHO</span></li></ul><h1 class="titulo_pagina_desenv flutua_para_esquerda">HDI Seguros</h1><br><br></div></td></tr></table><br><table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr><td>&nbsp;</td></tr><tr><td><p class="tit1" style="text-indent:30px;"><img src="/_images/_icon/red_bullet.gif" width="7" height="7">&nbsp;Pesquisa de sinistros</p></td></tr><tr><td><br></td></tr></table>
  <form action="dsp_mr_busca_sinistro.htm" name="f_entrada" id="f_entrada" method="post">
    <input type="hidden" name="flgBack" id="flgBack">
    <input type="hidden" name="m_login" id="m_login" value="LUCIANAC">
    <input type="hidden" name="m_user_id" id="m_user_id" value="LUCIANAC">
    <input type="hidden" name="UserIdBroker" id="UserIdBroker" value="LUCIANAC">
    <input type="hidden" name="m_tit_padrao" id="m_tit_padrao" value="LUCIANA SANTIAGO COELHO">
    <input type="hidden" name="program_list" id="program_list" value="">
    <input type="hidden" name="m_origem" id="m_origem" value="">
    <input type="hidden" name="cod_empresa" id="cod_empresa" value="">
    <input type="hidden" name="cod_sucursal" id="cod_sucursal" value="">
    <input type="hidden" name="cod_carteira" id="cod_carteira" value="">
    <input type="hidden" name="cod_ramo" id="cod_ramo" value="">
    <input type="hidden" name="seq_sinistro" id="seq_sinistro" value="">
    <input type="hidden" name="seq_siniuss" id="seq_siniuss" value="010013151784694">
    <input type="hidden" name="tip_estima" id="tip_estima">
    <input type="hidden" name="p_acao" id="p_acao">
    <input type="hidden" name="p_rowid" id="p_rowid">
    <input type="hidden" name="seq_rcla" id="seq_rcla">
    <input type="hidden" name="hid_http" id="hid_http" value="https">
    <input type="hidden" name="hid_server_prod" id="hid_server_prod" value="netd.hdi.com.br">
    <input type="hidden" name="hid_broker_prod" id="hid_broker_prod" value="">
    <input type="hidden" name="div_p_msgerro" id="div_p_msgerro" />
    <input type="hidden" name="hs_td_voltar" id="hs_td_voltar" value="show" lastAct="s" />
    <input type="hidden" name="hs_td_baixa_varias" id="hs_td_baixavarias" value="show" lastAct="s" />
    <input type="hidden" name="hs_td_liquida_varias" id="hs_td_liquida_varias" value="show" lastAct="s" />
    <input type="hidden" name="hs_td_atualiza" id="hs_td_atualiza" value="show" lastAct="s" />
    <input type="hidden" name="donowait" id="donowait" />
    <input type="hidden" name="cod_mot_enc" id="cod_mot_enc" value="" />
    <input type="hidden" name="just_mot_enc" id="just_mot_enc" value="" /> <!-- SCPJ0162 -->
    <input type="hidden" name="hs_dat_venciment" id="hs_dat_venciment" value="false" />
    <!-- SN0596 - JeanP - 19/04/2016 -->
    <input type="hidden" name="p_acao_cpl" id="p_acao_cpl">
    <!-- FIM SN0596 -->
    <br />
    <br />
    <table class="table_forms" align="center" valign="middle" width="100%">
        <tr>
          <td>
              <table name="table_wait" id="table_wait" width="100%" cellspanding="0" rowpanding="0">
                <tr>
                    <td align="center" valing="middle">
                      <span >
                          <img src="/images_2008/wait26trans.gif" border="0">
                          <span class="conteudo_aguarde">
                            <label style="color:#ff0000;font-style:italic;font-weight:bold;}">Processando Aguarde ....</label>
                          </span>
                      </span>
                    </td>
                </tr>
              </table>
          </td>
        </tr>
        <tr>
          <td>
              <br />
          </td>
        </tr>
        <tr>
          <td>
              <div name="div_busca" id="div_busca" />
              <br />
              <br />
          </td>
        </tr>
        <tr>
          <td align="center" valign="middle">
              <table class="table_forms" align="center" valign="middle" width="100%">
                <tr>
                    <td name="td_voltar" id="td_voltar" nowrap align="center">
                      <a href="javascript:void(0)" class="btnSemSeta"  id="btn_voltar" name="btn_voltar" onClick="JavaScript:procBack();" title="Clique aqui para RETORNAR a pesquisa">
                          <span><img src="/images/seta_esquerda.ico" border="0" height="11" width="14">&nbsp;Sair&nbsp;&nbsp;</span>
                      </a>
                    </td>
                    <td name="td_baixa_varias" id="td_baixavarias" nowrap align="center">
                      <a href="javascript:void(0)" class="btnSemSeta"  id="btn_baixa_varias" name="btn_baixa_varias" onClick="JavaScript:procAcaoVarias(this);" title="Clique aqui para BAIXAR as estimativas selecionadas">
                          <span><img src="/images/botao_excl.gif" border="0" height="11" width="14">&nbsp;Baixar Selecionadas&nbsp;&nbsp;</span>
                      </a>
                    </td>
                    <td name="td_liquida_varias" id="td_liquida_varias" nowrap align="center">
                      <a href="javascript:void(0)" class="btnSemSeta"  id="btn_liquida_varias" name="btn_liquida_varias" onClick="JavaScript:procAcaoVarias(this);" title="Clique aqui para LIQUIDAR as estimativas selecionadas">
                          <span><img src="/images/dolar.gif" border="0" height="11" width="14">&nbsp;Liquidar Selecionadas&nbsp;&nbsp;</span>
                      </a>
                    </td>
                    <td name="td_atualiza" id="td_atualiza" nowrap align="center">
                      <a href="javascript:void(0)" class="btnSemSeta"  id="btn_atualiza" name="btn_atualiza" onClick="proc_refresh();" title="Clique aqui para ATUALIZAR a página">
                          <span><img src="/images/atualizar.gif" border="0" height="11" width="14">&nbsp;Atualizar&nbsp;&nbsp;</span>
                      </a>
                    </td>
                </tr>
              </table>
          </td>
        </tr>
    </table>
  </form>
  </td></tr></table>
  <p>&nbsp;</p></td></tr></table>
  </td></tr></table>
  <table id="id_file_info01"><tr><td title="Prg:dsp_mr_busca_sinistro.htm C:? ? M:10/10/17 15:05">&nbsp;</td><td title="Prg:dsp_mr_busca_sinistro.r C:? ? M:14/04/20 20:25">&nbsp;</td></tr></table>
  <script language="JavaScript">
  hide_id("id_file_info01");
  </script>
  <script language='javascript'>
  function SetCorners(){
    borda.style.top  = document.body.scrollTop;
    borda.style.left = document.body.scrollLeft;
  }
  function init(){
    SetCorners();
    document.body.onscroll = SetCorners;
    document.body.onresize = SetCorners;
  }
  function mostra_bordas(){
    if (document.all) {
        var allTables = document.all.tags("TABLE")
    } 
    else if (document.getElementsByTagName) {
        var allTables = document.getElementsByTagName("TABLE")
    }
    for (i=0;i < allTables.length;i++){
        if (allTables[i].border == 0 ) 
            allTables[i].border = 3;
    }
    SetCorners();
  }
  function esconde_bordas(){
    if (document.all) {
        var allTables = document.all.tags("TABLE");
    } 
    else if (document.getElementsByTagName) {
        var allTables = document.getElementsByTagName("TABLE");
    }
    for (i=0;i < allTables.length;i++){
      if (allTables[i].border == 3 ) 
          allTables[i].border = 0;
    }
    SetCorners();
  }
  </script>
  <img id="borda" src="/_images/_geral/borda.gif" style="position:absolute;" width="20" height="20" ondblclick="mostra_bordas();" onmouseout="esconde_bordas();" border="0">
  <script language='javascript'>
  //document.body.onload = init;
  init();
  </script>
  </body></html>
  <script language="JavaScript">
    ajax_runprocapp_xml ( "app_dsp_mr_busca_sinistro.p", "f_entrada", false );
    proc_show_hide();
  </script>


  <!-- Generated by Webspeed: http://www.webspeed.com/ -->
`;

function loadXMLString(p_XMLStr) {
  // proc_wait_status ( true, "loadXMLString" );

  // Internet Explorer
  if ( window.ActiveXObject || ( !(window.ActiveXObject) && "ActiveXObject" in window)) {
     xmlDoc = new ActiveXObject("Microsoft.XMLDOM");

     // Codigo que já funcionava no IE - apenas mudei de lugar
     xmlDoc.async=false;
     xmlDoc.loadXML(p_XMLStr);
  }

  // Roberto - Safari/Chrome
  else if (window.DOMParser) {
     parser=new DOMParser();
     xmlDoc=parser.parseFromString(p_XMLStr,"text/xml");
  }

  // code for Mozilla, Firefox, Opera, etc.
  else if (document.implementation.createDocument) {
     xmlDoc=document.implementation.createDocument("","",null);

     // Codigo que já funcionava no IE
     xmlDoc.async=false;
     xmlDoc.loadXML(p_XMLStr);
  } else {
     alert('Your browser cannot handle this script');
    //  proc_wait_status ( false, "loadXMLString" );
     return null;
  }

  // proc_wait_status ( false, "loadXMLString" );

  return xmlDoc;
}

console.log(loadXMLString(EXEMPLO_XML));