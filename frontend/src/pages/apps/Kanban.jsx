import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/kanban/Kanban.scss";
import KanbanColumn from "../../components/kanban/KanbanColumn";

export default function Kanban() {
  return (
    <>
      <div className="kanban">
        <Sidebar />
        <div className="container">
          <Navbar />
          <div
            className="kanban-boxes"
            style={{ marginTop: "100px", marginBottom: "24px" }}
          >
            <div className="kanban-content">
              <div className="columns-wrapper">
                <KanbanColumn />
                <KanbanColumn />
                <KanbanColumn />
              </div>
              <div className="add-new-wrapper">addNew</div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
