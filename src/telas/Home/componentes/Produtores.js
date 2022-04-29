import React, {useEffect, useState} from "react";

import {Text, StyleSheet, FlatList} from 'react-native';

import { carregaProdutores } from "../../../servicos/carregaDados";
import Produtor from "./Produtor";

export default function Produtores({topo: Topo}){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState('');

    useEffect( () => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, [])

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }
    return (
        <FlatList 
            data={lista}
            keyExtractor={({nome}) => nome}
            renderItem={ ({item}) => <Produtor {...item} /> }
            ListHeaderComponent={ TopoLista  }
        />
    )
}


const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: "#464646",
    }
})