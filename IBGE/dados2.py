#!/usr/bin/env python
# -*- coding: utf-8 -*-


import datetime
import os
import urllib
import logging
import sys

import json
import random
import codecs
import pickle
import shutil



def getListaMunicipios():

    f = open('municipios.json')
    data = f.read()

    parsed_json = ''
    parsed_json = json.loads(data)

    vet = []
    for item in parsed_json:
        codigo = item['id']
        nome = item['nome']
        uf = item['microrregiao']['mesorregiao']['UF']['sigla']
        vet.append([codigo, nome, uf])

    return vet


def getInformacoes(cidade):

    listaMunicipios = getListaMunicipios()

    dados = {
        'populacao' : '29166',
        'pop_estimada' : '29171',
        'pessoal_ocupado' : '29763',
        'pop_ocupada' : '60036',
        'salario_medio' : '29765',
        'idh' : '30255',
        'mortalidade_infantil' : '30279',
        'arborizacao' : '60029',
        'esgotamento' : '60030',
        'urbanizacao' : '60031',
        'pib_per_capita' : '60047'
    }

    parametros = '|'.join(dados.values())
    url = 'https://servicodados.ibge.gov.br/api/v1/pesquisas/indicadores/%s?localidade=%s' % (parametros, cidade)
    f = urllib.urlopen(url)
    data = f.read()
    parsed_json = ''
    parsed_json = json.loads(data)

    nome = ''
    uf = ''
    for municipio in listaMunicipios:

        if str(municipio[0]) == cidade:
            nome = municipio[1]
            uf = municipio[2]

    dicionario = {'cidade': nome, 'uf': uf }

    dic_dados = {}
    for item in parsed_json:
        if 'res' in item.keys():
            aux = item['res'][0]['res']
            maior = max(aux.keys())
            valor =  aux[maior]
            dic_dados[unicode(item['indicador'])] = valor

    dicionario['dados'] = dic_dados

    return dicionario

f = open('dados.txt','w')

vet = []
cont = 1
for municipio in getListaMunicipios():
    print cont
    cont = cont + 1
    a = getInformacoes(municipio[0])
    json.dump(a, f)

f.close()
