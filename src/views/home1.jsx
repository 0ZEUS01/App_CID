<div>
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Kaiadmin - Bootstrap 5 Admin Dashboard</title>
  <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport" />
  <link rel="icon" href="assets/img/kaiadmin/favicon.ico" type="image/x-icon" />
  {/* Fonts and icons */}
  {/* CSS Files */}
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/plugins.min.css" />
  <link rel="stylesheet" href="assets/css/kaiadmin.min.css" />
  {/* CSS Just for demo purpose, don't include it in your project */}
  <link rel="stylesheet" href="assets/css/demo.css" />
  <div className="wrapper">
    {/* Sidebar */}
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        {/* Logo Header */}
        <div className="logo-header" data-background-color="dark">
          <a href="index.html" className="logo">
            <img src="assets/img/kaiadmin/logo_light.svg" alt="navbar brand" className="navbar-brand" height={20} />
          </a>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right" />
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left" />
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt" />
          </button>
        </div>
        {/* End Logo Header */}
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-item active">
              <a data-bs-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                <i className="fas fa-home" />
                <p>Dashboard</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="dashboard">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="../demo1/index.html">
                      <span className="sub-item">Dashboard 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h" />
              </span>
              <h4 className="text-section">Components</h4>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#base">
                <i className="fas fa-layer-group" />
                <p>Base</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="base">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="components/avatars.html">
                      <span className="sub-item">Avatars</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/buttons.html">
                      <span className="sub-item">Buttons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/gridsystem.html">
                      <span className="sub-item">Grid System</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/panels.html">
                      <span className="sub-item">Panels</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/notifications.html">
                      <span className="sub-item">Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/sweetalert.html">
                      <span className="sub-item">Sweet Alert</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/font-awesome-icons.html">
                      <span className="sub-item">Font Awesome Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/simple-line-icons.html">
                      <span className="sub-item">Simple Line Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/typography.html">
                      <span className="sub-item">Typography</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#sidebarLayouts">
                <i className="fas fa-th-list" />
                <p>Sidebar Layouts</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="sidebarLayouts">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="sidebar-style-2.html">
                      <span className="sub-item">Sidebar Style 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="icon-menu.html">
                      <span className="sub-item">Icon Menu</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#forms">
                <i className="fas fa-pen-square" />
                <p>Forms</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="forms">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="forms/forms.html">
                      <span className="sub-item">Basic Form</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#tables">
                <i className="fas fa-table" />
                <p>Tables</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="tables">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="tables/tables.html">
                      <span className="sub-item">Basic Table</span>
                    </a>
                  </li>
                  <li>
                    <a href="tables/datatables.html">
                      <span className="sub-item">Datatables</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#maps">
                <i className="fas fa-map-marker-alt" />
                <p>Maps</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="maps">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="maps/googlemaps.html">
                      <span className="sub-item">Google Maps</span>
                    </a>
                  </li>
                  <li>
                    <a href="maps/jsvectormap.html">
                      <span className="sub-item">Jsvectormap</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#charts">
                <i className="far fa-chart-bar" />
                <p>Charts</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="charts">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="charts/charts.html">
                      <span className="sub-item">Chart Js</span>
                    </a>
                  </li>
                  <li>
                    <a href="charts/sparkline.html">
                      <span className="sub-item">Sparkline</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a href="widgets.html">
                <i className="fas fa-desktop" />
                <p>Widgets</p>
                <span className="badge badge-success">4</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../documentation/index.html">
                <i className="fas fa-file" />
                <p>Documentation</p>
                <span className="badge badge-secondary">1</span>
              </a>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#submenu">
                <i className="fas fa-bars" />
                <p>Menu Levels</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="submenu">
                <ul className="nav nav-collapse">
                  <li>
                    <a data-bs-toggle="collapse" href="#subnav1">
                      <span className="sub-item">Level 1</span>
                      <span className="caret" />
                    </a>
                    <div className="collapse" id="subnav1">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" href="#subnav2">
                      <span className="sub-item">Level 1</span>
                      <span className="caret" />
                    </a>
                    <div className="collapse" id="subnav2">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <span className="sub-item">Level 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* End Sidebar */}
    <div className="main-panel">
      <div className="main-header">
        <div className="main-header-logo">
          {/* Logo Header */}
          <div className="logo-header" data-background-color="dark">
            <a href="index.html" className="logo">
              <img src="assets/img/kaiadmin/logo_light.svg" alt="navbar brand" className="navbar-brand" height={20} />
            </a>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="gg-menu-right" />
              </button>
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left" />
              </button>
            </div>
            <button className="topbar-toggler more">
              <i className="gg-more-vertical-alt" />
            </button>
          </div>
          {/* End Logo Header */}
        </div>
        {/* Navbar Header */}
        <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button type="submit" className="btn btn-search pe-1">
                    <i className="fa fa-search search-icon" />
                  </button>
                </div>
                <input type="text" placeholder="Search ..." className="form-control" />
              </div>
            </nav>
            <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
              <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" aria-haspopup="true">
                  <i className="fa fa-search" />
                </a>
                <ul className="dropdown-menu dropdown-search animated fadeIn">
                  <form className="navbar-left navbar-form nav-search">
                    <div className="input-group">
                      <input type="text" placeholder="Search ..." className="form-control" />
                    </div>
                  </form>
                </ul>
              </li>
              <li className="nav-item topbar-icon dropdown hidden-caret">
                <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-envelope" />
                </a>
                <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                  <li>
                    <div className="dropdown-title d-flex justify-content-between align-items-center">
                      Messages
                      <a href="#" className="small">Mark all as read</a>
                    </div>
                  </li>
                  <li>
                    <div className="message-notif-scroll scrollbar-outer">
                      <div className="notif-center">
                        <a href="#">
                          <div className="notif-img">
                            <img src="assets/img/jm_denis.jpg" alt="Img Profile" />
                          </div>
                          <div className="notif-content">
                            <span className="subject">Jimmy Denis</span>
                            <span className="block"> How are you ? </span>
                            <span className="time">5 minutes ago</span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="notif-img">
                            <img src="assets/img/chadengle.jpg" alt="Img Profile" />
                          </div>
                          <div className="notif-content">
                            <span className="subject">Chad</span>
                            <span className="block"> Ok, Thanks ! </span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="notif-img">
                            <img src="assets/img/mlane.jpg" alt="Img Profile" />
                          </div>
                          <div className="notif-content">
                            <span className="subject">Jhon Doe</span>
                            <span className="block">
                              Ready for the meeting today...
                            </span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="notif-img">
                            <img src="assets/img/talha.jpg" alt="Img Profile" />
                          </div>
                          <div className="notif-content">
                            <span className="subject">Talha</span>
                            <span className="block"> Hi, Apa Kabar ? </span>
                            <span className="time">17 minutes ago</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="see-all" href="javascript:void(0);">See all messages<i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item topbar-icon dropdown hidden-caret">
                <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-bell" />
                  <span className="notification">4</span>
                </a>
                <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                  <li>
                    <div className="dropdown-title">
                      You have 4 new notification
                    </div>
                  </li>
                  <li>
                    <div className="notif-scroll scrollbar-outer">
                      <div className="notif-center">
                        <a href="#">
                          <div className="notif-icon notif-primary">
                            <i className="fa fa-user-plus" />
                          </div>
                          <div className="notif-content">
                            <span className="block"> New user registered </span>
                            <span className="time">5 minutes ago</span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="notif-icon notif-success">
                            <i className="fa fa-comment" />
                          </div>
                          <div className="notif-content">
                            <span className="block">
                              Rahmad commented on Admin
                            </span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="notif-img">
                            <img src="assets/img/profile2.jpg" alt="Img Profile" />
                          </div>
                          <div className="notif-content">
                            <span className="block">
                              Reza send messages to you
                            </span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="notif-icon notif-danger">
                            <i className="fa fa-heart" />
                          </div>
                          <div className="notif-content">
                            <span className="block"> Farrah liked Admin </span>
                            <span className="time">17 minutes ago</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="see-all" href="javascript:void(0);">See all notifications<i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item topbar-icon dropdown hidden-caret">
                <a className="nav-link" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                  <i className="fas fa-layer-group" />
                </a>
                <div className="dropdown-menu quick-actions animated fadeIn">
                  <div className="quick-actions-header">
                    <span className="title mb-1">Quick Actions</span>
                    <span className="subtitle op-7">Shortcuts</span>
                  </div>
                  <div className="quick-actions-scroll scrollbar-outer">
                    <div className="quick-actions-items">
                      <div className="row m-0">
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <div className="avatar-item bg-danger rounded-circle">
                              <i className="far fa-calendar-alt" />
                            </div>
                            <span className="text">Calendar</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <div className="avatar-item bg-warning rounded-circle">
                              <i className="fas fa-map" />
                            </div>
                            <span className="text">Maps</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <div className="avatar-item bg-info rounded-circle">
                              <i className="fas fa-file-excel" />
                            </div>
                            <span className="text">Reports</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <div className="avatar-item bg-success rounded-circle">
                              <i className="fas fa-envelope" />
                            </div>
                            <span className="text">Emails</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <div className="avatar-item bg-primary rounded-circle">
                              <i className="fas fa-file-invoice-dollar" />
                            </div>
                            <span className="text">Invoice</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <div className="avatar-item bg-secondary rounded-circle">
                              <i className="fas fa-credit-card" />
                            </div>
                            <span className="text">Payments</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item topbar-user dropdown hidden-caret">
                <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                  <div className="avatar-sm">
                    <img src="assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                  </div>
                  <span className="profile-username">
                    <span className="op-7">Hi,</span>
                    <span className="fw-bold">Hizrian</span>
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-user animated fadeIn">
                  <div className="dropdown-user-scroll scrollbar-outer">
                    <li>
                      <div className="user-box">
                        <div className="avatar-lg">
                          <img src="assets/img/profile.jpg" alt="image profile" className="avatar-img rounded" />
                        </div>
                        <div className="u-text">
                          <h4>Hizrian</h4>
                          <p className="text-muted">hello@example.com</p>
                          <a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">My Profile</a>
                      <a className="dropdown-item" href="#">My Balance</a>
                      <a className="dropdown-item" href="#">Inbox</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Account Setting</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Logout</a>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        {/* End Navbar */}
      </div>
      <div className="container">
        <div className="page-inner">
          <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
            <div>
              <h3 className="fw-bold mb-3">Dashboard</h3>
              <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
            </div>
            <div className="ms-md-auto py-2 py-md-0">
              <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
              <a href="#" className="btn btn-primary btn-round">Add Customer</a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-primary bubble-shadow-small">
                        <i className="fas fa-users" />
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Visitors</p>
                        <h4 className="card-title">1,294</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-info bubble-shadow-small">
                        <i className="fas fa-user-check" />
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Subscribers</p>
                        <h4 className="card-title">1303</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-success bubble-shadow-small">
                        <i className="fas fa-luggage-cart" />
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Sales</p>
                        <h4 className="card-title">$ 1,345</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-secondary bubble-shadow-small">
                        <i className="far fa-check-circle" />
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Order</p>
                        <h4 className="card-title">576</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="card card-round">
                <div className="card-header">
                  <div className="card-head-row">
                    <div className="card-title">User Statistics</div>
                    <div className="card-tools">
                      <a href="#" className="btn btn-label-success btn-round btn-sm me-2">
                        <span className="btn-label">
                          <i className="fa fa-pencil" />
                        </span>
                        Export
                      </a>
                      <a href="#" className="btn btn-label-info btn-round btn-sm">
                        <span className="btn-label">
                          <i className="fa fa-print" />
                        </span>
                        Print
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart-container" style={{minHeight: 375}}>
                    <canvas id="statisticsChart" />
                  </div>
                  <div id="myChartLegend" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-primary card-round">
                <div className="card-header">
                  <div className="card-head-row">
                    <div className="card-title">Daily Sales</div>
                    <div className="card-tools">
                      <div className="dropdown">
                        <button className="btn btn-sm btn-label-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Export
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-category">March 25 - April 02</div>
                </div>
                <div className="card-body pb-0">
                  <div className="mb-4 mt-2">
                    <h1>$4,578.58</h1>
                  </div>
                  <div className="pull-in">
                    <canvas id="dailySalesChart" />
                  </div>
                </div>
              </div>
              <div className="card card-round">
                <div className="card-body pb-0">
                  <div className="h1 fw-bold float-end text-primary">+5%</div>
                  <h2 className="mb-2">17</h2>
                  <p className="text-muted">Users online</p>
                  <div className="pull-in sparkline-fix">
                    <div id="lineChart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-round">
                <div className="card-header">
                  <div className="card-head-row card-tools-still-right">
                    <h4 className="card-title">Users Geolocation</h4>
                    <div className="card-tools">
                      <button className="btn btn-icon btn-link btn-primary btn-xs">
                        <span className="fa fa-angle-down" />
                      </button>
                      <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                        <span className="fa fa-sync-alt" />
                      </button>
                      <button className="btn btn-icon btn-link btn-primary btn-xs">
                        <span className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                  <p className="card-category">
                    Map of the distribution of users around the world
                  </p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="table-responsive table-hover table-sales">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <div className="flag">
                                  <img src="assets/img/flags/id.png" alt="indonesia" />
                                </div>
                              </td>
                              <td>Indonesia</td>
                              <td className="text-end">2.320</td>
                              <td className="text-end">42.18%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="flag">
                                  <img src="assets/img/flags/us.png" alt="united states" />
                                </div>
                              </td>
                              <td>USA</td>
                              <td className="text-end">240</td>
                              <td className="text-end">4.36%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="flag">
                                  <img src="assets/img/flags/au.png" alt="australia" />
                                </div>
                              </td>
                              <td>Australia</td>
                              <td className="text-end">119</td>
                              <td className="text-end">2.16%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="flag">
                                  <img src="assets/img/flags/ru.png" alt="russia" />
                                </div>
                              </td>
                              <td>Russia</td>
                              <td className="text-end">1.081</td>
                              <td className="text-end">19.65%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="flag">
                                  <img src="assets/img/flags/cn.png" alt="china" />
                                </div>
                              </td>
                              <td>China</td>
                              <td className="text-end">1.100</td>
                              <td className="text-end">20%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="flag">
                                  <img src="assets/img/flags/br.png" alt="brazil" />
                                </div>
                              </td>
                              <td>Brasil</td>
                              <td className="text-end">640</td>
                              <td className="text-end">11.63%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mapcontainer">
                        <div id="world-map" className="w-100" style={{height: 300}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-round">
                <div className="card-body">
                  <div className="card-head-row card-tools-still-right">
                    <div className="card-title">New Customers</div>
                    <div className="card-tools">
                      <div className="dropdown">
                        <button className="btn btn-icon btn-clean me-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-h" />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-list py-4">
                    <div className="item-list">
                      <div className="avatar">
                        <img src="assets/img/jm_denis.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>
                      <div className="info-user ms-3">
                        <div className="username">Jimmy Denis</div>
                        <div className="status">Graphic Designer</div>
                      </div>
                      <button className="btn btn-icon btn-link op-8 me-1">
                        <i className="far fa-envelope" />
                      </button>
                      <button className="btn btn-icon btn-link btn-danger op-8">
                        <i className="fas fa-ban" />
                      </button>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <span className="avatar-title rounded-circle border border-white">CF</span>
                      </div>
                      <div className="info-user ms-3">
                        <div className="username">Chandra Felix</div>
                        <div className="status">Sales Promotion</div>
                      </div>
                      <button className="btn btn-icon btn-link op-8 me-1">
                        <i className="far fa-envelope" />
                      </button>
                      <button className="btn btn-icon btn-link btn-danger op-8">
                        <i className="fas fa-ban" />
                      </button>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <img src="assets/img/talha.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>
                      <div className="info-user ms-3">
                        <div className="username">Talha</div>
                        <div className="status">Front End Designer</div>
                      </div>
                      <button className="btn btn-icon btn-link op-8 me-1">
                        <i className="far fa-envelope" />
                      </button>
                      <button className="btn btn-icon btn-link btn-danger op-8">
                        <i className="fas fa-ban" />
                      </button>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <img src="assets/img/chadengle.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>
                      <div className="info-user ms-3">
                        <div className="username">Chad</div>
                        <div className="status">CEO Zeleaf</div>
                      </div>
                      <button className="btn btn-icon btn-link op-8 me-1">
                        <i className="far fa-envelope" />
                      </button>
                      <button className="btn btn-icon btn-link btn-danger op-8">
                        <i className="fas fa-ban" />
                      </button>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <span className="avatar-title rounded-circle border border-white bg-primary">H</span>
                      </div>
                      <div className="info-user ms-3">
                        <div className="username">Hizrian</div>
                        <div className="status">Web Designer</div>
                      </div>
                      <button className="btn btn-icon btn-link op-8 me-1">
                        <i className="far fa-envelope" />
                      </button>
                      <button className="btn btn-icon btn-link btn-danger op-8">
                        <i className="fas fa-ban" />
                      </button>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <span className="avatar-title rounded-circle border border-white bg-secondary">F</span>
                      </div>
                      <div className="info-user ms-3">
                        <div className="username">Farrah</div>
                        <div className="status">Marketing</div>
                      </div>
                      <button className="btn btn-icon btn-link op-8 me-1">
                        <i className="far fa-envelope" />
                      </button>
                      <button className="btn btn-icon btn-link btn-danger op-8">
                        <i className="fas fa-ban" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card card-round">
                <div className="card-header">
                  <div className="card-head-row card-tools-still-right">
                    <div className="card-title">Transaction History</div>
                    <div className="card-tools">
                      <div className="dropdown">
                        <button className="btn btn-icon btn-clean me-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-h" />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    {/* Projects table */}
                    <table className="table align-items-center mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Payment Number</th>
                          <th scope="col" className="text-end">Date &amp; Time</th>
                          <th scope="col" className="text-end">Amount</th>
                          <th scope="col" className="text-end">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                              <i className="fa fa-check" />
                            </button>
                            Payment from #10231
                          </th>
                          <td className="text-end">Mar 19, 2020, 2.45pm</td>
                          <td className="text-end">$250.00</td>
                          <td className="text-end">
                            <span className="badge badge-success">Completed</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                              <i className="fa fa-check" />
                            </button>
                            Payment from #10231
                          </th>
                          <td className="text-end">Mar 19, 2020, 2.45pm</td>
                          <td className="text-end">$250.00</td>
                          <td className="text-end">
                            <span className="badge badge-success">Completed</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                              <i className="fa fa-check" />
                            </button>
                            Payment from #10231
                          </th>
                          <td className="text-end">Mar 19, 2020, 2.45pm</td>
                          <td className="text-end">$250.00</td>
                          <td className="text-end">
                            <span className="badge badge-success">Completed</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                              <i className="fa fa-check" />
                            </button>
                            Payment from #10231
                          </th>
                          <td className="text-end">Mar 19, 2020, 2.45pm</td>
                          <td className="text-end">$250.00</td>
                          <td className="text-end">
                            <span className="badge badge-success">Completed</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                              <i className="fa fa-check" />
                            </button>
                            Payment from #10231
                          </th>
                          <td className="text-end">Mar 19, 2020, 2.45pm</td>
                          <td className="text-end">$250.00</td>
                          <td className="text-end">
                            <span className="badge badge-success">Completed</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                              <i className="fa fa-check" />
                            </button>
                            Payment from #10231
                          </th>
                          <td className="text-end">Mar 19, 2020, 2.45pm</td>
                          <td className="text-end">$250.00</td>
                          <td className="text-end">
                            <span className="badge badge-success">Completed</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                              <i className="fa fa-check" />
                            </button>
                            Payment from #10231
                          </th>
                          <td className="text-end">Mar 19, 2020, 2.45pm</td>
                          <td className="text-end">$250.00</td>
                          <td className="text-end">
                            <span className="badge badge-success">Completed</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid d-flex justify-content-between">
          <nav className="pull-left">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="http://www.themekita.com">
                  ThemeKita
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Help </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Licenses </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            2024, made with <i className="fa fa-heart heart text-danger" /> by
            <a href="http://www.themekita.com">ThemeKita</a>
          </div>
          <div>
            Distributed by
            <a target="_blank" href="https://themewagon.com/">ThemeWagon</a>.
          </div>
        </div>
      </footer>
    </div>
    {/* Custom template | don't include it in your project! */}
    <div className="custom-template">
      <div className="title">Settings</div>
      <div className="custom-content">
        <div className="switcher">
          <div className="switch-block">
            <h4>Logo Header</h4>
            <div className="btnSwitch">
              <button type="button" className="selected changeLogoHeaderColor" data-color="dark" />
              <button type="button" className="changeLogoHeaderColor" data-color="blue" />
              <button type="button" className="changeLogoHeaderColor" data-color="purple" />
              <button type="button" className="changeLogoHeaderColor" data-color="light-blue" />
              <button type="button" className="changeLogoHeaderColor" data-color="green" />
              <button type="button" className="changeLogoHeaderColor" data-color="orange" />
              <button type="button" className="changeLogoHeaderColor" data-color="red" />
              <button type="button" className="changeLogoHeaderColor" data-color="white" />
              <br />
              <button type="button" className="changeLogoHeaderColor" data-color="dark2" />
              <button type="button" className="changeLogoHeaderColor" data-color="blue2" />
              <button type="button" className="changeLogoHeaderColor" data-color="purple2" />
              <button type="button" className="changeLogoHeaderColor" data-color="light-blue2" />
              <button type="button" className="changeLogoHeaderColor" data-color="green2" />
              <button type="button" className="changeLogoHeaderColor" data-color="orange2" />
              <button type="button" className="changeLogoHeaderColor" data-color="red2" />
            </div>
          </div>
          <div className="switch-block">
            <h4>Navbar Header</h4>
            <div className="btnSwitch">
              <button type="button" className="changeTopBarColor" data-color="dark" />
              <button type="button" className="changeTopBarColor" data-color="blue" />
              <button type="button" className="changeTopBarColor" data-color="purple" />
              <button type="button" className="changeTopBarColor" data-color="light-blue" />
              <button type="button" className="changeTopBarColor" data-color="green" />
              <button type="button" className="changeTopBarColor" data-color="orange" />
              <button type="button" className="changeTopBarColor" data-color="red" />
              <button type="button" className="selected changeTopBarColor" data-color="white" />
              <br />
              <button type="button" className="changeTopBarColor" data-color="dark2" />
              <button type="button" className="changeTopBarColor" data-color="blue2" />
              <button type="button" className="changeTopBarColor" data-color="purple2" />
              <button type="button" className="changeTopBarColor" data-color="light-blue2" />
              <button type="button" className="changeTopBarColor" data-color="green2" />
              <button type="button" className="changeTopBarColor" data-color="orange2" />
              <button type="button" className="changeTopBarColor" data-color="red2" />
            </div>
          </div>
          <div className="switch-block">
            <h4>Sidebar</h4>
            <div className="btnSwitch">
              <button type="button" className="changeSideBarColor" data-color="white" />
              <button type="button" className="selected changeSideBarColor" data-color="dark" />
              <button type="button" className="changeSideBarColor" data-color="dark2" />
            </div>
          </div>
        </div>
      </div>
      <div className="custom-toggle">
        <i className="icon-settings" />
      </div>
    </div>
    {/* End Custom template */}
  </div>
  {/*   Core JS Files   */}
  {/* jQuery Scrollbar */}
  {/* Chart JS */}
  {/* jQuery Sparkline */}
  {/* Chart Circle */}
  {/* Datatables */}
  {/* Bootstrap Notify */}
  {/* jQuery Vector Maps */}
  {/* Sweet Alert */}
  {/* Kaiadmin JS */}
  {/* Kaiadmin DEMO methods, don't include it in your project! */}
</div>
