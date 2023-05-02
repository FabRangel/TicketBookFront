import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "absolute",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333" className="">
        <CDBSidebarHeader
          prefix={<i className="fa fa-bars fa-large"></i>}
        ></CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" style={{ flexGrow: 1 }}>
          <CDBSidebarMenu>
            <NavLink exact to="/misEventos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar">
                Mis Eventos
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/misBoletos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="money">Mis Boletos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">
                Configuraciones
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center", marginTop: "auto" }}>
          <div
            style={{
              padding: "5px 5px 5px",
              backgroundColor: "rgb(12%, 12%, 12%)",
            }}
          >
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="power-off" style={{ color: "white" }}>
                Salir
              </CDBSidebarMenuItem>
            </NavLink>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
