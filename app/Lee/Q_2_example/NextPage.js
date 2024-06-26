import React from "react";
import styled from "styled-components/native";
import { Link, router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const Container = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

const NextPage = () => {

    return (
        <Container>
            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            width: 50,
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            
            }} onPress={() => { router.replace('../Q_2_main/App');}}>
            <Text style={{fontSize: 35}}>▶</Text>
            </TouchableOpacity>
        </Container> 
    );
};

export default NextPage;