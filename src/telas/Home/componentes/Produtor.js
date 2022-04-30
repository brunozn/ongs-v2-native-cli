import React, { useReducer, useMemo } from "react";

import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import Estrelas from "../../../components/Estrelas";

const distanciaemMetros = (distancia) => {
    return `${distancia}m`;
}

export default function Produtor({nome, imagem, distancia, estrelas}){
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado, false
    );

    const distanciaTexto = useMemo( 
        () => distanciaemMetros(), [distancia]
    );


    return <TouchableOpacity 
                style={estilos.cartao}
                onPress={inverterSelecionado}
                >
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas}
                          editavel={selecionado}
                          grande={selecionado}
                />
            </View>
            <Text style={estilos.distancia}>{distanciaTexto}</Text>
        </View>
    </TouchableOpacity>
}


const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16, 
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4,
    },
    imagem : {
        height: 48,
        width: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 9,
    }
    });