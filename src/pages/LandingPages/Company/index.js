/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
//import footerRoutes from "footer.routes";

// Images
//import bgImage from "assets/images/bg-about-us.jpg"; // ✅ 여기에 직접 넣으실 배경 이미지 지정
import companyImage from "assets/images/posh/company.png";
import companyImage2 from "assets/images/posh/company_2.png";
function Company() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />

      {/* 상단 배경 영역 */}
      <MKBox
        minHeight="70vh"
        width="100%"
        sx={{
          //backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <Container sx={{backgroundColor: "#fff"}}>
          <Grid
            container
            item
            xs={5}
            lg={10}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            {/* 로고 자리 */}
            <MKBox mb={1}>
              {/* ✅ 로고 이미지로 교체하세요 */}
              <img src={companyImage} alt="POSH MATERIALS" style={{ maxWidth: "600px" }} />
            </MKBox>
            {/* 서브 타이틀 */}
            <MKTypography
              variant="h5"
              color="black"
              fontWeight="bold"
              mt={1}
              mb={3}
              sx={{ borderTop: "2px solid black", borderBottom: "2px solid black", py: 0 }}
            >
              건축부자재 직수입 전문 기업
            </MKTypography>
            <MKTypography
              variant="body1"
              color="text"
              textAlign="center"
              lineHeight={1.3}
              sx={{ whiteSpace: "pre-line" }}
            >
              {`친절하고 정확한 상담을 통해 고객에게 `}
              <span style={{ fontWeight: "bold", fontSize: "22px" }}>적합</span>
              {`한 제품을 제공해드리고,
                적은 인건비와 탄탄한 중국 라인을 통해 `}
              <span style={{ fontWeight: "bold", fontSize: "22px" }}>합리</span>
              {`적인 단가로 견적을 드릴 수 있다고 확신합니다.

                원가 절감이 필요하시거나, 기존 거래하시던 업체의 대응이 점점 늦어진다면,
                저희 `}
              <span style={{ fontWeight: "bold", fontSize: "22px" }}>파쉬머티리얼즈</span>
              {`에 연락하셔서 기존보다 낮은 단가와 빠른 대응을 확인해보시기 바랍니다.

                고객 여러분의 경제적 이익과 편리를 위해 최선을 다하겠습니다.
                귀사의 자재 부서라고 생각하시고 마음껏 이용해주십시오.

                감사합니다.`}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

      <MKBox width="100%" 
              height="30%" 
              mt={0} 
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{backgroundColor: "#fff"}}
      >
        <img 
          src={companyImage2} // 하단에 넣고 싶은 이미지
          alt="Bottom Banner" 
          style={{ width: "70%", height: "40%", maxWidth: "80%"}}
        />
        {/* 원형 컨테이너 */}
        <MKBox
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: "translate(-50%, -50%)",
            display: "flex",
            gap: 15, // 원 사이 간격
          }}
        >
          {/* 첫 번째 원 */}
          <MKBox
            sx={{
              width: 250,
              height: 250,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "35px",
              textAlign: "center",
              padding: 2,
            }}
          >
            STRIVE
          </MKBox>

          {/* 두 번째 원 */}
          <MKBox
            sx={{
              width: 250,
              height: 250,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "35px",
              textAlign: "center",
              padding: 2,
            }}
          >
            SUITABLE
          </MKBox>

          {/* 세 번째 원 */}
          <MKBox
            sx={{
              width: 250,
              height: 250,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "35px",
              textAlign: "center",
              padding: 2,
            }}
          >
            REASONABLE
          </MKBox>
        </MKBox>
      </MKBox>
    </>
  );
}

export default Company;
