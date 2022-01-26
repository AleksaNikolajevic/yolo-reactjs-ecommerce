import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
 import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

// import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

import banner from '../assets/images/banner.png'
import Carousel from 'react-bootstrap/Carousel'


const Test = () => {
    return (
        
        <Helmet title="Fly London Srbija">
            {/* hero slider */}
            <Carousel variant="dark" controls="false">
  <Carousel.Item>
    <img onClick={()=> window.open("/proizvodi/P141941028", "_blank")}s
      className="d-block w-100"
      src="https://1971747289.rsc.cdn77.org/images/block1_2907_gb.jpg?1639132646"
      alt="First slide"
    />
    <Carousel.Caption>
     {/*  <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img onClick={()=> window.open("/proizvodi/P141941028", "_blank")}
      className="d-block w-100"
      src="https://1971747289.rsc.cdn77.org/images/block1_2935_gb.jpg?1639568948"
      alt="Second slide"
    />
    <Carousel.Caption>
     {/*  <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img onClick={()=> window.open("/proizvodi/P141941028", "_blank")}
      className="d-block w-100"
      src="https://1971747289.rsc.cdn77.org/images/banner430_gb.jpg?1642461833"
      alt="Third slide"
    />
    <Carousel.Caption>
     {/*  <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           {/*  <HeroSlider
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={5000}
            /> */}
            {/* end hero slider */}

            {/* policy section */}
           {/*  <Section>
                <SectionBody>
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={15}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    image={item.image}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section> */}
            {/* end policy section */}
          
            {/* best selling section */}
            <Section>
                <SectionTitle>
                AFTER PARTY

                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    Preporučujemo
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}
            
            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    Budite uvek u trendu
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular product section */}
        </Helmet>
    )
}

export default Test
