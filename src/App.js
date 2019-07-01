import React, { Component } from "react";
import classNames from "classnames";
import { AppTopbar } from "./AppTopbar";
import { AppFooter } from "./AppFooter";
import { AppMenu } from "./AppMenu";
import { AppInlineProfile } from "./AppInlineProfile";
import { Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { ScrollPanel } from "primereact/components/scrollpanel/ScrollPanel";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "fullcalendar/dist/fullcalendar.css";
import "./layout/layout.css";
import "./App.css";
import { ListMahasiswa } from "./components/ListMahasiswa";
import { AddMahasiswa } from "./components/AddMahasiswa";
import { EditMahasiswa } from "./components/EditMahasiswa";
import { ListFK_PR } from "./components/ListFK_PR";
import { ListPrediksi } from "./components/list_prediksi";
import { PrediksiMahasiswa } from "./components/prediksi_mahasiswa";
import { ListAdmin } from "./components/adminlist";
import { Detail_Mahasiswa } from "./components/Detail_Mahasiswa";
import { AddFK } from "./components/AddFK";
import { AddPR } from "./components/AddPR";
import { EditFK } from "./components/EditFK";
import { EditPR } from "./components/EditPR";
import { AddPrediksi } from "./components/AddPrediksi";

class App extends Component {
  constructor() {
    super();
    this.state = {
      layoutMode: "static",
      layoutColorMode: "dark",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false
    };

    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onWrapperClick(event) {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.state.layoutMode === "overlay") {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive
        });
      } else if (this.state.layoutMode === "static") {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive
      });
    }

    event.preventDefault();
  }

  onSidebarClick(event) {
    this.menuClick = true;
    setTimeout(() => {
      this.layoutMenuScroller.moveBar();
    }, 500);
  }

  onMenuItemClick(event) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }
  }

  createMenu() {
    this.menu = [
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-home",
        command: () => {
          window.location = "/";
        }
      },
      {
        label: "Master Data",
        icon: "pi pi-fw pi-bookmark",
        items: [
          { label: "Admin User", icon: "pi pi-fw pi-user", to: "/adminlist" },
          {
            label: "Mahasiswa",
            icon: "pi pi-fw pi-users",
            to: "/list_mahasiswa"
          },
          {
            label: "Fakultas & Prodi",
            icon: "pi pi-fw pi-file",
            to: "/jurusan"
          }
        ]
      },
      {
        label: "Prediksi Kelulusan",
        icon: "pi pi-fw pi-chart-bar",
        to: "/ListPrediksi"
      }
    ];
  }

  addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  }

  removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  componentDidUpdate() {
    if (this.state.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  }

  render() {
    let logo =
      this.state.layoutColorMode === "dark"
        ? "assets/layout/images/logo-white.svg"
        : "assets/layout/images/logo.svg";

    let wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive
    });
    let sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.layoutColorMode === "dark"
    });

    return (
      <div className={wrapperClass} onClick={this.onWrapperClick}>
        <AppTopbar onToggleMenu={this.onToggleMenu} />

        <div
          ref={el => (this.sidebar = el)}
          className={sidebarClassName}
          onClick={this.onSidebarClick}
        >
          <ScrollPanel
            ref={el => (this.layoutMenuScroller = el)}
            style={{ height: "100%" }}
          >
            <div className="layout-sidebar-scroll-content">
              <div className="layout-logo">
                {/* <img alt="Logo" src={logo} /> */}
                <h3 style={{ color: "white" }}>App Prediksi</h3>
              </div>
              <AppInlineProfile />
              <AppMenu
                model={this.menu}
                onMenuItemClick={this.onMenuItemClick}
              />
            </div>
          </ScrollPanel>
        </div>

        <div className="layout-main">
          <Route path="/" exact component={Dashboard} />
          <Route path="/list_mahasiswa" component={ListMahasiswa} />
          <Route path="/AddMahasiswa" component={AddMahasiswa} />
          <Route path="/EditMahasiswa/:nim" component={EditMahasiswa} />
          <Route path="/Jurusan" component={ListFK_PR} />
          <Route path="/ListPrediksi" component={ListPrediksi} />
          <Route path="/PrediksiMahasiswa/:nim" component={PrediksiMahasiswa} />
          <Route path="/adminlist" component={ListAdmin} />
          <Route path="/Detail_Mahasiswa/:nim" component={Detail_Mahasiswa} />
          <Route path="/EditFK/:id" component={EditFK} />
          <Route path="/AddFK" component={AddFK} />
          <Route path="/EditPR/:id" component={EditPR} />
          <Route path="/AddPR" component={AddPR} />
          <Route path="/AddPrediksi" component={AddPrediksi} />
        </div>

        {/* <AppFooter /> */}

        <div className="layout-mask" />
      </div>
    );
  }
}

export default App;
