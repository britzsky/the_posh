/* eslint-disable react/function-component-definition */
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/posh/posh_1.png";
import logoImage from "assets/images/posh/posh_logo_2.png";
import companyImage from "assets/images/posh/company.png";
import companyImage2 from "assets/images/posh/company_2.png";
import solutionImage1 from "assets/images/posh/solution_1.png";
import solutionImage2 from "assets/images/posh/solution_2.png";
import productImage1 from "assets/images/posh/product_1.jpg";
import productImage2 from "assets/images/posh/product_2.png";
import productImage3 from "assets/images/posh/product_3.jpg";
import productImage4 from "assets/images/posh/product_4.png";
import sol_subImage1 from "assets/images/posh/sub_1.png";
import sol_subImage2 from "assets/images/posh/sub_2.png";
import sol_subImage3 from "assets/images/posh/sub_3.png";

function Presentation() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Company", id: "company" },
    { name: "Solution", id: "solution" },
    // { name: "Quality", id: "sub_solution" },
    { name: "Product", id: "product" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              color="inherit"
              onClick={() => handleScroll(item.id)}
              sx={{ fontWeight: "bold" }}
            >
              {item.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <MKBox
        id="home"
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          position: "relative",
        }}
      >
        <Container>
          <Grid container justifyContent="flex-start">
            <MKTypography
              variant="body1"
              color="white"
              textAlign="left"
              fontWeight="bold"
              fontSize={{ xs: "20px", sm: "28px", md: "38px" }}
              px={{ xs: 2, sm: 3 }}
              mt={{ xs: -10, sm: -15, md: -40 }}
            >
              <img src={logoImage} style={{ width: "30%" }} />
              <br></br>
              “가장 적합한 제품을 합리적인 가격으로<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제공하기 위해 최선을 다하겠습니다.”
            </MKTypography>
          </Grid>
        </Container>

        <MKBox sx={{ position: "absolute", bottom: 20, right: 20 }}>
          <MKTypography
            variant="body2"
            color="white"
            fontWeight="bold"
            fontSize={{ xs: "16px", sm: "28px", md: "38px" }}
            textAlign="right"
            lineHeight={1.4}
          >
            DIRECT IMPORT SPECIALIST <br />
            FOR BUILDING & TEXTILE MATERIALS
          </MKTypography>
        </MKBox>
      </MKBox>

      {/* Company Section */}
      <MKBox
        id="company"
        minHeight="50vh"
        width="100%"
        display="grid"
        placeItems="center"
        sx={{ backgroundColor: "#fff", scrollMarginTop: "60px" }}
      >
        <Container>
          <Grid container direction="column" alignItems="center" textAlign="center">
            <MKBox mb={2}>
              <img src={companyImage} alt="POSH MATERIALS" style={{ maxWidth: "100%", width: "600px" }} />
            </MKBox>
            <MKTypography
              variant="h5"
              color="black"
              fontWeight="bold"
              mb={3}
              sx={{ borderTop: "2px solid black", borderBottom: "2px solid black", py: 0 }}
            >
              건축부자재 직수입 전문 기업
            </MKTypography>
            <MKTypography variant="body1" color="text" lineHeight={1.2} sx={{ whiteSpace: "pre-line", px: { xs: 2, md: 0 } }}>
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
                귀사의 자재 부서라고 생각하시고 마음껏 이용해주십시오.\n\n감사합니다.`}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

      {/* Circle Section */}
      <MKBox
        width="100%"
        position="relative"
        justifyContent="center"
        alignItems="center"
        display={{ xs: "none", md: "flex" }} // 모바일에서는 숨김
        sx={{ backgroundColor: "#fff", py: 8 }}
      >
        <img src={companyImage2} alt="Bottom Banner" style={{ width: "70%", maxWidth: "850px", height: "auto" }} />
        <MKBox
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: "translate(-50%, -50%)",
            display: "flex",
            gap: { sm: 5, md: 15 },
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["STRIVE", "SUITABLE", "REASONABLE"].map((text) => (
            <MKBox
              key={text}
              sx={{
                width: { sm: 150, md: 200 },
                height: { sm: 150, md: 200 },
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: { sm: "22px", md: "28px" },
                textAlign: "center",
                padding: 2,
              }}
            >
              {text}
            </MKBox>
          ))}
        </MKBox>
      </MKBox>

      {/* Solution Section */}
      <MKBox id="solution" width="100%" py={12} sx={{ backgroundColor: "#fff" }}>
        <Container>
          {[{
            title: "원가절감 솔루션",
            desc: `중간 마진이 없는 다이렉트 유통을 통해 최적의 단가를 제공합니다.\n파쉬머티리얼즈만의 합리적인 단가를 만나보세요.`,
            img: solutionImage1
          },{
            title: "제품서칭 솔루션",
            desc: `수많은 제품 서칭 경험을 바탕으로 최적의 제품을 찾아드립니다.\n원하시는 제품의 특성, 성분, 규격 등 말씀만 해주세요.`,
            img: solutionImage2
          }].map((item, idx) => (
            <Grid item xs={12} md={10} mb={6} key={idx}>
              <Card sx={{ p: { xs: 2, md: 4 }, mb: 4 }}>
                <MKTypography variant="h4" align="center" gutterBottom>{item.title}</MKTypography>
                <MKTypography variant="body2" align="center" mb={4} sx={{ whiteSpace: "pre-line" }}>{item.desc}</MKTypography>
                <MKBox display="flex" justifyContent="center">
                  <img src={item.img} alt={item.title} style={{ width: "100%", maxWidth: "600px", height: "auto" }} />
                </MKBox>
              </Card>
            </Grid>
          ))}
        </Container>
      </MKBox>

      {/* Sub Solution Section (Centered Version) */}
      <MKBox id="sub_solution" width="100%" py={12} sx={{ backgroundColor: "#fff" }}>
        <Container>
          <MKTypography variant="h4" align="center" fontWeight="bold" gutterBottom>품질관리 솔루션</MKTypography>

          {[{
            img: sol_subImage1,
            title: "1. 정기적 현지 방문",
            desc: `정기적인 현지 방문으로 공장의 긴장도를 높여 품질을 유지하고, 꾸준한 관계를 구축하여 안정적인 생산 기반을 확보합니다.`
          },{
            img: sol_subImage2,
            title: "2. 생산 현장 직접 관리",
            desc: `메인 물량 생산 시, 직접 공장을 방문하여 샘플과 동일한 제품이 생산되는지 철저히 확인합니다. 이를 통해 제품의 일관성을 확보하고 불량 발생을 사전에 방지합니다.`
          },{
            img: sol_subImage3,
            title: "3. 불량품 관리 보상",
            desc: `불량품 발생 시, 중국 공장과 협의하여 합리적이고 적절한 보상을 제공합니다. 신속한 문제 해결로 고객사의 손실을 최소화하고 신뢰를 지킵니다.`
          }].map((item, idx) => (
            <Grid
              container
              spacing={2}
              direction={{ xs: "column", md: idx % 2 === 1 ? "row-reverse" : "row" }}
              alignItems="center"
              justifyContent="center"
              mb={6}
              key={idx}
            >
              {/* 텍스트 영역 */}
              <Grid item xs={12} md={5} display="flex" justifyContent="center">
                <Card sx={{ p: { xs: 2, md: 5 }, borderRadius: 2, boxShadow: 3, textAlign: "center" }}>
                  <MKTypography variant="h6" fontWeight="bold" gutterBottom>{item.title}</MKTypography>
                  <MKTypography variant="body2" color="text">{item.desc}</MKTypography>
                </Card>
              </Grid>

              {/* 이미지 영역 */}
              <Grid item xs={12} md={4} display="flex" justifyContent="center" mt={{ xs: 2, md: 0 }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "8px" }}
                />
              </Grid>
            </Grid>
          ))}
        </Container>
      </MKBox>

      {/* Product Section */}
      <MKBox id="product" width="100%" py={15} sx={{ backgroundColor: "#fff" }}>
        <Container>
          <Card sx={{ p: 4, mb: 4, border: "15px solid transparent", borderRadius: "50px", borderImageSlice: 1, borderImageSource: "linear-gradient(90deg, #27548A 0%, #183B4E 100%)" }}>
            <MKTypography variant="h4" align="center" fontWeight="bold" gutterBottom>MAIN PRODUCT</MKTypography>

            <Grid container spacing={4} justifyContent="center">
              {[{img: productImage1, title:"유리섬유 직물(준불연)"},{img: productImage2,title:"메쉬(Glass, PET, Cotton)"}].map((p, idx) => (
                <Grid item xs={12} md={6} key={idx} textAlign="center">
                  <MKBox mb={2}><img src={p.img} alt={p.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} /></MKBox>
                  <MKTypography variant="body2" sx={{ borderTop: "1px solid black" }}>{p.title}</MKTypography>
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={4} justifyContent="center" mt={2}>
              {[{img: productImage3, title:"부직포(PET, PP, PLA 등)"},{img: productImage4,title:"지오그리드(Glass, PET, PP)"}].map((p, idx) => (
                <Grid item xs={12} md={6} key={idx} textAlign="center">
                  <MKBox mb={2}><img src={p.img} alt={p.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} /></MKBox>
                  <MKTypography variant="body2" sx={{ borderTop: "1px solid black" }}>{p.title}</MKTypography>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Container>
      </MKBox>

      {/* Contact Section */}
      <Grid id="contact" container justifyContent="center">
        <Grid item xs={12} md={10} lg={8} mt={{ xs: 10, sm: 12, md: 20 }} mb={{ xs: 10, sm: 12, md: 20 }}>
          <MKBox bgColor="white" borderRadius="xl" shadow="lg" p={{ xs: 4, md: 12 }} display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center">
            <MKBox flex={{ xs: "0 0 auto", md: "0 0 40%" }} display="flex" justifyContent="center" alignItems="center" p={2} borderRight={{ md: "1px solid #ddd" }} mb={{ xs: 3, md: 0 }}>
              <MKBox component="img" src={companyImage} alt="Company Logo" sx={{ maxWidth: "400px", width: "100%" }} />
            </MKBox>

            <MKBox flex="1" px={3}>
              <MKTypography variant="h4" color="info" mb={2}>CONTACT</MKTypography>

              <MKBox mb={2}>
                <MKTypography variant="body1" fontWeight="bold">주종복 실장</MKTypography>
                <MKTypography variant="body2" color="text">Phone. 010-2776-3947</MKTypography>
                <MKTypography variant="body2" color="text" fontWeight="medium">Peter Joo</MKTypography>
              </MKBox>

              <MKBox mb={2}>
                <MKTypography variant="body1" fontWeight="bold">양승현 팀장</MKTypography>
                <MKTypography variant="body2" color="text">Phone. 010-8302-8484</MKTypography>
                <MKTypography variant="body2" color="text" fontWeight="medium">Richard Yang</MKTypography>
              </MKBox>

              <MKBox mt={3}>
                <MKTypography variant="body2" color="text">E-Mail. posh1121@naver.com</MKTypography>
                <MKTypography variant="body2" color="text">Address. 경기도 성남시 분당구 야탑동 334</MKTypography>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default Presentation;
