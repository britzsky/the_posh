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
// import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// // Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
// import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
// import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";

// // Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
//import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/posh/posh_1.png";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          position: "relative", // absolute 배치용
        }}
      >
        <Container>
          <Grid container item xs={12} justifyContent="flex-start" mx="auto">
            <MKTypography
              variant="body1"
              color="white"
              textAlign="left" // 왼쪽 끝 정렬
              fontWeight="bold"
              fontSize="38px"
              px={{ xs: 3, lg: 1 }}
              mt={-25}
            >
              “가장 적합한 제품을 합리적인 가격으로<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제공하기 위해 최선을 다하겠습니다.”
            </MKTypography>
          </Grid>
        </Container>

        {/* 오른쪽 하단 문구 */}
        <MKBox
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
          }}
        >
          <MKTypography
            variant="body2"
            color="white"
            fontWeight="bold"
            fontSize="38px"
            textAlign="right"
            lineHeight={1.4}
          >
            DIRECT IMPORT SPECIALIST <br />
            FOR BUILDING & TEXTILE MATERIALS
          </MKTypography>
        </MKBox>
      </MKBox>
    </>
  );
}

export default Presentation;
