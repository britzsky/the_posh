import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import Footer from "pages/LandingPages/Author/sections/Footer";
import routes from "routes";

import solutionImage1 from "assets/images/posh/solution_1.png";
import solutionImage2 from "assets/images/posh/solution_2.png";

function Solution() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
          minHeight="100vh"
          width="100%"
          py={12}
          sx={{
            //backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
            backgroundColor: "#fff"
          }}
        >
        <Container sx={{backgroundColor: "#fff"}}>
          {/* 원가절감 솔루션 */}
          <Grid item xs={12} md={10}>
            <Card sx={{ p: 2, mb: 2 }}>
              <MKTypography variant="h4" align="center" gutterBottom>
                원가절감 솔루션
              </MKTypography>
              <MKTypography variant="body2" align="center" mb={4}>
                중간 마진이 없는 다이렉트 유통을 통해 최적의 단가를 제공합니다.<br></br>
                파쉬머티리얼즈만의 합리적인 단가를 만나보세요.
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <MKBox textAlign="center">
                  <img src={solutionImage1} alt="원가절감" width={"60%"} />
                </MKBox>
              </MKBox>
            </Card>
          </Grid>

          {/* 제품서칭 솔루션 */}
          <Grid item xs={12} md={10}>
            <Card sx={{ p: 2, mb: 2 }}>
              <MKTypography variant="h4" align="center" gutterBottom>
                제품서칭 솔루션
              </MKTypography>
              <MKTypography variant="body2" align="center" mb={4}>
                수많은 제품 서칭 경험을 바탕으로 최적의 제품을 찾아드립니다.<br></br>
                원하시는 제품의 특성, 성분, 규격 등 말씀만 해주세요.
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <MKBox textAlign="center">
                  <img src={solutionImage2} alt="제품서칭" width={"60%"} />
                </MKBox>
              </MKBox>
            </Card>
          </Grid>

          {/* 품질관리 솔루션 */}
          <Grid item xs={12} md={10}>
            <Card sx={{ p: 4, mb: 4 }}>
              <MKTypography variant="h4" align="center" gutterBottom>
                품질관리 솔루션
              </MKTypography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card sx={{ p: 3, bgcolor: "#3D365C", color: "#fff", textAlign: "center" }}>
                    정기적인 중국 방문으로<br></br>
                    중국 공장의 긴장도를 높이고,<br></br>
                    꾸준한 관계(관시)를 유지하여<br></br>
                    품질의 일관성을 유지합니다.
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ p: 3, bgcolor: "#7C4585", color: "#fff", textAlign: "center" }}>
                    메인 물량 생산 시,<br></br>
                    중국 공장을 직접 방문하여<br></br>
                    기존 샘플과 동일한 제품이<br></br>
                    생산 되는지 직접 확인합니다.
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ p: 3, bgcolor: "#C95792", color: "#fff", textAlign: "center" }}>
                    불량 제품 발생 시,<br></br>
                    중국 공장과 협의 하에<br></br>
                    합리적이고 적절한 <br></br>
                    보상을 해드립니다.
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Solution;
