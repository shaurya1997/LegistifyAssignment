import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "../App.css";
import Appointment from "./Appointment.js";
import { useSelector } from "react-redux";
import LawyerData from "./LawyerData";
import Header from "./Header";

const Firms = () => {
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(false);
  const [lawyerId, setLawyerId] = useState("");
  const { firmData } = useSelector((state) => state.firm);

  useEffect(() => {
    childToRender();
  }, []);

  const handleClick = (id) => {
    setShow(true);
    setLawyerId(id);
  };

  const openLawyerData = (id) => {
    setShowData(true);
    setLawyerId(id);
  };

  const childToRender = () => {
    let lawyerData = firmData;
    let key = Object.keys(lawyerData["lawyers"]);
    let tmpData = (
      <Grid container className="lawyer">
        {key.map((item, index) => {
          return (
            <Grid className="lawyer-name">
              <div
                style={{
                  width: "100px",
                  padding: "10px",
                  background: "aliceblue",
                  cursor: "pointer",
                }}
                key={index}
                onClick={() => openLawyerData(lawyerData.lawyers[item].lId)}
              >
                {lawyerData.lawyers[item].name}
              </div>
              <span>
                <Button
                  variant="contained"
                  className="btn"
                  onClick={() => handleClick(lawyerData.lawyers[item].lId)}
                >
                  Book An Appointment
                </Button>
              </span>
            </Grid>
          );
        })}
      </Grid>
    );
    return tmpData;
  };
  return (
    <>
      <Header />
      <h1 className="Heading_icon">Lawyer List</h1>
      {childToRender()}
      {show && (
        <Appointment show={show} setShow={setShow} lawyerId={lawyerId} />
      )}
      {showData && (
        <LawyerData
          showData={showData}
          setShowData={setShowData}
          lawyerId={lawyerId}
        />
      )}
    </>
  );
};
export default Firms;
