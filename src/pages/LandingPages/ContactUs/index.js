import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import companyImage from "assets/images/posh/company.png";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>

      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          md={10}
          lg={8}
          mt={{ xs: 20, sm: 18, md: 20 }}
          mb={{ xs: 20, sm: 18, md: 20 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            p={12}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
          >
            {/* 좌측: 로고 / 이미지 영역 */}
            <MKBox
              flex={{ xs: "0 0 auto", md: "0 0 40%" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={2}
              borderRight={{ md: "1px solid #ddd" }}
              mb={{ xs: 3, md: 0 }}
            >
              {/* 👉 여기에 이미지 넣으시면 됩니다 */}
              <MKBox
                component="img"
                src={companyImage}
                alt="Company Logo"
                sx={{ maxWidth: "400px", width: "100%" }}
              />
            </MKBox>

            {/* 우측: 연락처 정보 */}
            <MKBox flex="1" px={3}>
              <MKTypography variant="h4" color="info" mb={2}>
                CONTACT
              </MKTypography>

              <MKBox mb={2}>
                <MKTypography variant="body1" fontWeight="bold">
                  주종복 실장
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Phone. 010-2776-3947
                </MKTypography>
                <MKTypography variant="body2" color="text" fontWeight="medium">
                  Peter Joo
                </MKTypography>
              </MKBox>

              <MKBox mb={2}>
                <MKTypography variant="body1" fontWeight="bold">
                  양승현 팀장
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Phone. 010-8302-8484
                </MKTypography>
                <MKTypography variant="body2" color="text" fontWeight="medium">
                  Richard Yang
                </MKTypography>
              </MKBox>

              <MKBox mt={3}>
                <MKTypography variant="body2" color="text">
                  E-Mail. posh1121@naver.com
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Address. 경기도 성남시 분당구 야탑동 334
                </MKTypography>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
