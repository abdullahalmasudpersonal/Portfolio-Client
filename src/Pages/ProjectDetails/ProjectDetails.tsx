import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Carousel } from "react-responsive-carousel";
import { useGetSingleProjectQuery } from "../../redux/features/project/projectApi";
import Loader2 from "../Shared/loader/Loader2";

const ProjectDetails = () => {
  const { id: projectId } = useParams();
  const { data: projectDetails, isLoading } =
    useGetSingleProjectQuery(projectId);

  const {
    name,
    image,
    title,
    live_link,
    client_side_code,
    server_side_code,
    frontEndTechnology,
    backEndTechnology,
    description,
    features,
  } = projectDetails?.data || {};
  console.log(projectDetails);

  return (
    <div className=" productDetail">
      {/* <div className="productDetailDev container"> */}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          {" "}
          <Loader2 />
        </div>
      ) : (
        <div className="productDetailDev container">
          {" "}
          <div>
            <Carousel className="text-center pro-detail-casual">
              {image?.map((img: string, index: number) => (
                <div key={index}>
                  <img
                    style={{ borderRadius: "5px" }}
                    src={
                      img.includes("res.cloudinary.com")
                        ? img.replace("/upload/", "/upload/f_auto,q_auto/")
                        : img
                    }
                    srcSet={`${img}?w=300 300w, ${img}?w=600 600w, ${img}?w=1200 1200w`}
                    sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
                    alt={`Product Image ${index}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div>
            <div
              style={{
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                minHeight: "200px",
                padding: "15px",
              }}
            >
              <h4 className="mb-2">{name}</h4>
              <h6 className="mb-2">{title}</h6>
              <p className="mb-2">
                Live Link:{" "}
                <a
                  style={{ textDecoration: "none", color: "#60A3D9" }}
                  href={live_link}
                  target="_blank"
                  rel="noopener noreferrer" // নিরাপত্তার জন্য
                >
                  {live_link?.length > 50
                    ? `${live_link?.slice(0, 50)}...`
                    : live_link}
                </a>
              </p>
              <p className="mb-2">
                Client Side Code:{" "}
                <a
                  style={{ textDecoration: "none", color: "#60A3D9" }}
                  href={client_side_code}
                  target="_blank"
                  rel="noopener noreferrer" // নিরাপত্তার জন্য
                >
                  {client_side_code?.length > 50
                    ? `${client_side_code?.slice(0, 50)}...`
                    : client_side_code}
                </a>
              </p>
              <p className="mb-2">
                Server Side Code:{" "}
                <a
                  style={{ textDecoration: "none", color: "#60A3D9" }}
                  href={server_side_code}
                  target="_blank"
                  rel="noopener noreferrer" // নিরাপত্তার জন্য
                >
                  {server_side_code?.length > 50
                    ? `${server_side_code?.slice(0, 50)}...`
                    : server_side_code}
                </a>
              </p>
              <p style={{ marginBottom: "7px" }}>
                Front-End Technology: {frontEndTechnology}
              </p>
              <p style={{ marginBottom: "0px" }}>
                Back-End Technology: {backEndTechnology}
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h5>Features</h5>
              <p dangerouslySetInnerHTML={{ __html: features }} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h5>Description</h5>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default ProjectDetails;
