import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
// Image
import productImage1 from "assets/images/posh/product_1.jpg";
import productImage2 from "assets/images/posh/product_2.png";
import productImage3 from "assets/images/posh/product_3.jpg";
import productImage4 from "assets/images/posh/product_4.png";

function Product() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="100vh"
        width="100%"
        py={15}
        sx={{
          backgroundColor: "#fff",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Card 
            sx={{ p: 4, 
                  mb: 4, 
                  border: "15px solid transparent",
                  borderRadius: "50px",
                  borderImageSlice: 1,
                  borderImageSource: "linear-gradient(90deg, #27548A 0%, #183B4E 100%)",
                }}
            >
            {/* 상단 타이틀 */}
            <MKTypography
              variant="h4"
              align="center"
              fontWeight="bold"
              gutterBottom
            >
              MAIN PRODUCT
            </MKTypography>
            <MKTypography
              variant="body2"
              align="center"
              mb={6}
              sx={{ whiteSpace: "pre-line" }}
            >
              {`현재 페이지 제품들은 주요 제품만 나열한 것입니다.\n다른 필요하신 제품이 있으시면 언제든 문의주시기 바랍니다.`}
            </MKTypography>

            {/* 제품 4개 (2행 2열) */}
            <Grid container spacing={4} justifyContent="center">
              {/* 1 */}
              <Grid item xs={12} md={6} textAlign="center">
                <MKBox mb={2}>
                  {/* 이미지 영역 */}
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    <img src={productImage1} alt="유리섬유 직물" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> 
                  </div>
                </MKBox>
                <MKTypography 
                  variant="body2"
                  sx={{ borderTop: "1px solid black" }}
                >
                  유리섬유 직물(준불연)
                </MKTypography>
              </Grid>

              {/* 2 */}
              <Grid item xs={12} md={6} textAlign="center">
                <MKBox mb={2}>
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    <img src={productImage2} alt="유리섬유 직물" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> 
                  </div>
                </MKBox>
                <MKTypography 
                  variant="body2"
                  sx={{ borderTop: "1px solid black" }}
                >
                  메쉬(Glass, PET, Cotton)
                </MKTypography>
              </Grid>

              {/* 3 */}
              <Grid item xs={12} md={6} textAlign="center">
                <MKBox mb={2}>
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    <img src={productImage3} alt="유리섬유 직물" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> 
                  </div>
                </MKBox>
                <MKTypography 
                  variant="body2"
                  sx={{ borderTop: "1px solid black" }}
                >
                  부직포(PET, PP, PLA 등)
                </MKTypography>
              </Grid>

              {/* 4 */}
              <Grid item xs={12} md={6} textAlign="center">
                <MKBox mb={2}>
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    <img src={productImage4} alt="유리섬유 직물" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> 
                  </div>
                </MKBox>
                <MKTypography 
                  variant="body2"
                  sx={{ borderTop: "1px solid black" }}
                >
                  지오그리드(Glass, PET, PP)
                </MKTypography>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </MKBox>
    </>
  );
}

export default Product;
