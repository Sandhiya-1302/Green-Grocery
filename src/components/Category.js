import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import VegMenu from "./VegMenu";
import { useState, useRef, useEffect } from "react";
import FruitMenu from "./FruitMenu";
import { category } from "./categoryData";

function Category({
  cart,
  handleAddButton,
  handleRemoveButton,
  fruits,
  vegetables,
}) {
  const [activeMenu, setActiveMenu] = useState(null);
  const vegSectionRef = useRef(null);
  const fruitSectionRef = useRef(null);

  useEffect(() => {
    if (activeMenu === "veg" && vegSectionRef.current) {
      vegSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (activeMenu === "fruit" && fruitSectionRef.current) {
      fruitSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeMenu]);

  return (
    <div className="div">
      <section id="category" className="section" style={{ height: "100vh" }}>
        <Container>
          <Row className="pt-3 mt-5" style={{ marginTop: "10px" }}>
            {category.map((item, index) => (
              <Col
                key={index}
                xs={6}
                md={6}
                className="mt-1 d-flex justify-content-center mb-3"
              >
                <Card
                  imgFruitSrc={item.imgSrc}
                  fruitTitle={item.title}
                  fruitsDescription={item.description}
                  onShowMenu={() => item.function(setActiveMenu)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section
        ref={vegSectionRef}
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        {activeMenu === "veg" && (
          <VegMenu
            cart={cart}
            handleAddButton={handleAddButton}
            handleRemoveButton={handleRemoveButton}
            vegetables={vegetables}
          />
        )}
      </section>
      <section
        ref={fruitSectionRef}
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        {activeMenu === "fruit" && (
          <FruitMenu
            cart={cart}
            handleAddButton={handleAddButton}
            handleRemoveButton={handleRemoveButton}
            fruits={fruits}
          />
        )}
      </section>
    </div>
  );
}

export default Category;
