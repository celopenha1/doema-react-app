import { Fragment } from "react";
import './style.css';
import assinaturaImg from "../../../assets/img/assinatura.svg";
import { FormPesquisa } from "./FormPesquisa";

export function Home() {
  return (
    <Fragment>
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Consulta Avançada</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card ">
                <div className="card-header ">
                  <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                        type="button" role="tab" aria-controls="home" aria-selected="true">Executivo</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                        type="button" role="tab" aria-controls="profile" aria-selected="false">Terceiros</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages"
                        type="button" role="tab" aria-controls="messages" aria-selected="false">Justiça</button>
                    </li>
                  </ul>
                </div>
                <div className="card-body ">
                  <form action="#" id="">
                    <div className="tab-content">
                      <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="input-group mb-3">
                              <label className="input-group-text" htmlFor="Ativar">
                                <input value="secretaria" className="form-check-input mt-0" type="checkbox"
                                  id="secretariaCheckbox" aria-label="Checkbox for following text input" />
                              </label>
                              <label className="input-group-text" htmlFor="Ativar"><i className="far fa-file-alt"></i></label>
                              <select className="form-select form-control" id="secretariaSelect" disabled>
                                <option value="">POR SECRETARIA</option>
                                <option value="SECRETARIA DE SEGURANÇA PÚBLICA">SECRETARIA DE SEGURANÇA PÚBLICA
                                </option>
                                <option value="SECRETARIA DA MULHER">SECRETARIA DA MULHER</option>
                                <option value="SECRETARIA DO ESPORTE E LAZER">SECRETARIA DO ESPORTE E LAZER
                                </option>
                                <option value="SECRETARIA DO MEIO AMBEIENTE">SECRETARIA DO MEIO AMBEIENTE</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="input-group mb-3">
                              <label className="input-group-text" htmlFor="inputGroupSelect01">
                                <input className="form-check-input mt-0" type="checkbox" id="tipoCheckbox"
                                  aria-label="Checkbox for following text input" />
                              </label>
                              <label className="input-group-text" htmlFor="inputGroupSelect01"><i
                                className="far fa-file-alt"></i></label>
                              <select name="tipo" className="form-select form-control" id="tipoSelect" disabled>
                                <option value="LEI Nº">LEI Nº</option>
                                <option value="DECRETO Nº">DECRETO Nº</option>
                                <option value="PORTARIA Nº">PORTARIA Nº</option>
                                <option value="MENSAGENS">MENSAGENS </option>
                              </select>
                              <input name="numeroTipo" id="tipoInput" placeholder="Ex: Lei 3.200/2021" type="text"
                                aria-label="Last name" className="form-control" disabled />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="input-group mb-3 ">
                              <input name="dataInicialModal" id="dataInicialModal" type="text" className="form-control"
                                placeholder="Data Inicial" aria-label="Data Inicial" />
                              <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                              <input name="dataFinalModal" id="dataFinalModal" type="text" className="form-control"
                                placeholder="Data Final" aria-label="Data Final" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="input-group mb-3">
                              <input name="termo" type="text" className="form-control" placeholder="Termo de pesquisa"
                                aria-label="Termo de pesquisa" aria-describedby="button-addon2" />
                              <button className="btn btn-primary" type="submit" id="button-addon2"><i
                                className="fas fa-search"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                      <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-dark text-light ">
        <div className="pt-5 pb-2 container-sm">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 my-auto mx-auto">
              <h1 className="doema-titulo display-1 lh-1 corpid-font">DIÁRIO OFICIAL
                <span className="doema-subtitulo display-6 text-warning">Estado do Maranhão</span>
              </h1>
              <p className="lead">Pesquise, publique, e fique por dentro de todas as informações do Estado</p>
              <a   className=" mb-3 mx-1 text-light btn-primary btn btn-lg link-light " href="/feriados">
                <i className="far fa-calendar-alt"></i> Calendário de Edições
              </a>
              <a className=" mb-3 mx-1 btn-light btn btn-lg" target="_blank" href="https://www.diariooficial.ma.gov.br/diario/f/login.xhtml" >  <i className="fas fa-file-word"></i> Publicar no Diário</a>

              <button className=" mb-3 mx-1  text-light btn-primary btn btn-lg">
                <i className="fas fa-book"></i> Edições
              </button>

            </div>
            {/* CONTAINER DO SVG ANIMATION MARANHAO */}
            <div className="col-lg-4 col-md-4 col-sm-4 d-none d-md-block d-sm-block">
              <svg className="mx-auto my-auto img-fluid" id="outputsvg" xmlns="http://www.w3.org/2000/svg"
                width="3000" height="3520" viewBox="0 0 3000 3520">
                <g id="l1tpPVSNEWA3g" fill="none" stroke="rgb(0,95,131)" strokeWidth="10">
                  <g fill="none">
                    <path
                      d="M1405 130L1375 160C1365 140 1370 115 1400 125C1445 135 1485 155 1530 175C1545 180 1555 200 1570 210C1585 220 1615 225 1625 240C1640 250 1640 265 1650 275C1690 310 1735 325 1775 350C1800 365 1830 430 1875 400C1890 390 1880 365 1875 350C1865 310 1830 285 1810 250C1800 235 1795 215 1775 210C1755 210 1710 280 1695 295M1410 140L1380 160M1385 165C1400 210 1470 200 1505 225C1525 235 1525 260 1540 275C1550 285 1560 285 1570 295C1585 305 1585 320 1595 330C1630 360 1670 340 1695 310M1270 350C1300 325 1320 390 1300 405C1280 430 1245 365 1270 350M1925 580C1895 585 1845 610 1820 585C1780 550 1860 445 1905 450C1940 460 1950 545 1950 575C1865 590 2000 695 1965 600C1960 590 1955 585 1950 575M2280 665C2265 675 2250 680 2235 680C2225 685 2210 685 2200 685C2125 680 2175 630 2195 605C2205 590 2215 565 2235 575C2265 590 2270 645 2290 670M1975 640L2005 660C2020 645 2040 620 2065 630C2105 640 2095 710 2155 670M2005 665C1995 680 1985 690 1975 705C1935 795 2120 780 2125 690M2825 790C2805 805 2760 815 2760 775C2760 755 2785 745 2800 760C2825 775 2850 810 2840 840C2825 885 2725 955 2680 970C2655 975 2630 970 2605 980C2545 1010 2500 1115 2460 1170C2445 1195 2415 1215 2410 1245C2395 1290 2410 1335 2415 1375C2415 1420 2400 1460 2410 1505C2415 1535 2455 1580 2450 1605C2445 1655 2380 1690 2355 1725C2320 1765 2320 1835 2320 1885C2320 1910 2320 1965 2345 1980C2400 2005 2390 1910 2410 1885C2455 1805 2530 1780 2495 1675C2490 1650 2480 1630 2460 1620M2830 790C2920 705 2935 930 2910 985C2890 1025 2850 1035 2815 1060C2790 1075 2780 1100 2750 1110C2705 1130 2665 1120 2635 1160C2595 1205 2565 1260 2530 1310C2515 1335 2485 1355 2475 1385C2470 1410 2490 1440 2495 1465C2500 1505 2485 1555 2455 1585M400 1525C430 1515 470 1535 500 1540C530 1545 565 1540 595 1555C615 1560 630 1585 645 1595C675 1615 710 1625 740 1650C755 1670 790 1775 760 1790C745 1795 725 1775 715 1770C695 1755 670 1750 650 1735C635 1720 625 1700 605 1690C580 1685 550 1695 525 1690C490 1680 455 1655 415 1660C385 1665 355 1715 325 1705C310 1700 300 1680 295 1665C260 1600 340 1545 400 1525M2395 1985C2405 2030 2445 2050 2455 2100C2460 2150 2450 2255 2405 2285C2375 2305 2345 2295 2315 2305C2295 2305 2270 2320 2250 2320C2220 2320 2195 2290 2170 2275C2135 2260 2100 2270 2065 2280C2005 2300 1970 2340 1925 2380C1880 2415 1815 2465 1760 2490C1680 2530 1555 2530 1485 2595C1440 2640 1435 2705 1415 2760C1385 2830 1340 2910 1290 2965C1275 2985 1250 3050 1230 3050C1210 3055 1200 3030 1195 3015C1190 2970 1190 2920 1195 2875C1205 2830 1250 2810 1270 2770C1295 2715 1330 2660 1350 2605C1375 2545 1380 2475 1440 2440C1510 2395 1610 2380 1685 2350C1755 2325 1840 2255 1895 2200C1955 2140 2060 2110 2145 2130C2170 2135 2185 2155 2205 2165C2235 2170 2305 2160 2335 2145C2380 2115 2375 2055 2400 2015M630 2295C645 2285 700 2285 710 2300C725 2320 725 2355 735 2375C755 2415 785 2450 810 2485C825 2505 840 2535 860 2545C875 2550 900 2535 915 2535C945 2525 1030 2520 1055 2540C1080 2560 1080 2655 1055 2675C1035 2690 1010 2670 990 2670C955 2675 920 2710 885 2700C860 2690 845 2655 830 2635C790 2575 720 2520 685 2460C665 2420 640 2390 625 2345C620 2330 615 2305 630 2295M1025 3335C970 3290 960 3210 930 3150C905 3105 860 3075 840 3030C825 2995 810 2905 880 2950C915 2970 905 3005 925 3035C955 3070 1000 3060 1015 3110C1020 3140 1010 3160 1015 3190C1015 3225 1030 3255 1035 3290C1040 3315 1030 3335 1030 3355C1045 3455 1120 3500 1215 3500C1245 3500 1255 3460 1260 3435C1285 3370 1305 3270 1290 3200C1285 3180 1275 3115 1245 3115C1215 3115 1215 3195 1215 3215C1210 3250 1205 3305 1175 3335C1145 3365 1070 3345 1035 3325M1220 3510L1220 3520"
                      className="svg-elem-1"></path>
                  </g>
                </g>
                <g id="l4za0LjzuPrqn" fill="none" stroke="rgb(255,255,255)" strokeWidth="10">
                  <g fill="none">
                    <path
                      d="M335 1545C435 1535 525 1425 610 1370C645 1345 690 1345 725 1315C770 1275 800 1225 835 1175C865 1140 900 1110 920 1075C945 1040 950 995 975 960C1005 910 1055 875 1085 820C1105 780 1100 720 1120 685C1135 665 1165 650 1180 630C1200 600 1190 570 1205 540C1220 510 1250 500 1265 470C1285 430 1265 400 1270 360C1275 335 1310 330 1315 310C1340 255 1315 185 1360 135C1390 100 1415 150 1445 155C1510 175 1560 205 1610 245C1625 255 1620 285 1635 290C1655 295 1690 275 1705 265L1745 290L1750 290C1740 270 1730 250 1705 260M1725 245L1770 220C1775 240 1770 280 1785 295C1800 305 1815 300 1825 315C1845 335 1830 380 1875 360L1840 315M1760 290L1775 290M1875 370C1945 430 1915 505 1850 555M1905 510C1955 540 1935 580 1970 620C2000 650 2105 600 2055 675C2050 685 2045 700 2040 710L2045 715L2105 685L2080 655M2105 685C2140 685 2195 625 2210 595C2235 605 2255 640 2280 635C2320 635 2320 595 2370 615C2490 655 2590 730 2710 765C2735 770 2745 755 2770 750C2790 750 2805 760 2825 760C2840 765 2870 755 2875 770C2925 870 2785 965 2710 1000C2680 1015 2645 1005 2620 1025C2560 1060 2520 1160 2480 1215C2460 1240 2435 1265 2430 1295C2430 1320 2455 1330 2460 1355C2465 1395 2435 1425 2435 1465C2440 1520 2480 1575 2475 1635C2460 1715 2360 1740 2355 1825C2355 1855 2350 1900 2360 1930C2370 1960 2405 1975 2420 2005C2435 2040 2405 2140 2380 2165C2350 2190 2230 2215 2195 2205C2135 2190 2110 2150 2040 2165C1975 2180 1935 2225 1885 2270C1840 2305 1775 2350 1725 2380C1650 2425 1540 2420 1465 2470C1410 2510 1400 2575 1380 2630C1360 2685 1325 2755 1295 2805C1275 2845 1225 2870 1220 2920C1215 2965 1240 3000 1250 3040C1270 3120 1255 3225 1235 3305C1225 3330 1215 3375 1190 3390C1170 3400 1110 3380 1085 3375C1010 3355 1020 3305 995 3250C985 3230 960 3215 960 3195C955 3170 985 3155 980 3130C970 3090 925 3095 900 3070C885 3050 885 3015 865 2995C855 2980 820 2970 825 2945C830 2920 855 2900 870 2880C895 2835 890 2780 930 2740C945 2725 975 2720 995 2705C1030 2680 1045 2625 1035 2585C1010 2510 880 2610 840 2590C815 2575 795 2540 780 2515C750 2470 710 2430 685 2385C675 2370 680 2350 675 2335C665 2315 630 2325 620 2305C605 2270 680 2220 690 2185C705 2110 745 2040 755 1965C760 1920 745 1865 740 1820C735 1780 740 1730 720 1695C700 1660 640 1650 610 1620C595 1610 580 1585 560 1580C500 1565 445 1580 395 1540M2250 630C2230 645 2215 650 2195 630M2070 665L2090 690M2055 675L2080 700M2040 715L1945 750"
                      className="svg-elem-2"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>

        </div>
      </section>

      <section className="my-5">
        <div className="container-md ">
          <h2 className=" text-center display-4 ">CONSULTA SIMPLES</h2>
          <div className="row justify-content-center align-items-center ">
            <div className="col-lg-8 col-md-12 col-sm-12 ">
              <div className=" card shadow">
                <FormPesquisa />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 bg-dark">
        <div className=" py-5 my-5 container">
          <div className="row text-center g-4">


            <div className="col-md">
              <div className="card bg-light text-dark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className=" mb-3 fas  fa-2x fa-book"></i>
                  </div>
                  <h3 className="card-title mb-3">Edições</h3>

                  <a href="/jornal/edicoes" className="btn btn-outline-dark">Acessar</a>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card bg-light text-dark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className=" mb-3  fa-2x fas fa-file-word"></i>
                  </div>
                  <h3 className="card-title mb-3">Publicações</h3>

                  <a target="__blank" href="http://doema-trello.herokuapp.com/executivos"
                    className="btn btn-outline-dark">Acessar</a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-light text-dark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className=" mb-3 fas  fa-2x fa-book-open"></i>
                  </div>
                  <h3 className="card-title mb-3">Biblioteca</h3>
                  <a href="#" className="btn btn-outline-dark">Acessar</a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-light text-dark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className=" mb-3 fas  fa-2x fa-bullhorn"></i>
                  </div>
                  <h3 className="card-title mb-3">Aviso de Licitações</h3>
                  <a href="#" className="btn btn-outline-dark">Acessar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 my-auto mx-auto">
              <h1 className=" display-1 lh-1">DOEMA DIGITAL
                <span className="display-6 text-warning">Mais modernidade e praticidade para
                  você</span>
              </h1>
              <p className="lead">
                O Diário Oficial do Estado do Maranhão agora possui uma plataforma digital cheia de novos recursos
                incríveis.
                Veja o que há de mais moderno aqui...
              </p>
              <button className=" mb-3 mx-1 text-light btn-primary btn btn-lg">
                <i className="fas fa-book"></i> Saiba mais...
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 d-none d-md-block d-sm-block">
              <img src={assinaturaImg} className="img-fluid rounded-start" alt="..." />

            </div>
          </div>
        </div>
      </section>

    </Fragment  >
  )
}