import React from 'react'
import styled from 'styled-components'
import {Section} from "./Section";
import {Header} from "./Header";


export function Home() {
    return (
        <Container>
            <Header />
            <Section title='Model S' description='Order Online for Touchless Delivery' leftBtnText='Custom Order' rightBtnText='Existing inventory' img='/images/model-s.jpg'/>
            <Section title='Model 3' description='Order Online for Touchless Delivery' leftBtnText='Custom Order' rightBtnText='Existing inventory' img='/images/model-3.jpg'/>
            <Section title='Model X' description='Order Online for Touchless Delivery' leftBtnText='Custom Order' rightBtnText='Existing inventory' img='/images/model-x.jpg'/>
            <Section title='Model Y' description='Order Online for Touchless Delivery' leftBtnText='Custom Order' rightBtnText='Existing inventory' img='/images/model-y.jpg'/>
            <Section title='Lowest Cost Solar Panels in America' description='Money-back guarantee' img='/images/solar-panel.jpg' leftBtnText='Order Now' rightBtnText='Learn More'/>
            <Section title='Solar for New Rules' description='Solar Roof Costs Lass Than a New Roof plus New Panel' img='/images/solar-roof.jpg' leftBtnText='Order Now' rightBtnText='Learn More'/>
            <Section title='Accessories' description='' img='/images/accessories.jpg' leftBtnText='Stop Now' />
    </Container>
    )

}

const Container = styled.div`
   height: 100 vh;
    `