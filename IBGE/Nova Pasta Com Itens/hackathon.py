#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import random
import urllib

cartasSorteadas = []

def getListaMunicipios():
    ''' Pega a lista de municipios do IBGE '''
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


def getInformacoesCidade(cidade):

    dados = {
        'idh' : '30255',
        'pop_estimada' : '29171',
        'urbanizacao' : '60031',
        'salario_medio' : '29765',
        'esgotamento' : '60030',
        'arborizacao' : '60029',
        'escolarizacao' : '60043'

#        'populacao' : '29166',
#        'pessoal_ocupado' : '29763',
#        'pop_ocupada' : '60036',
#        'mortalidade_infantil' : '30279',
#        'pib_per_capita' : '60047'
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
    indicador = ''
    for item in parsed_json:
        if item['indicador'] == u'Salário médio mensal':
            indicador = 'salario_medio'
        if item['indicador'] == u'População estimada':
            indicador = 'pop_estimada'
        if item['indicador'] == u'Arborização de vias públicas':
            indicador = 'arborizacao'
        if item['indicador'] == u'Urbanização de vias públicas':
            indicador = 'urbanizacao'
        if item['indicador'] == u'IDH':
            indicador = 'idh'
        if item['indicador'] == u'Esgotamento sanitário adequado':
            indicador = 'esgotamento'

        aux = item['res'][0]['res']
        maior = max(aux.keys())
        valor =  aux[maior]
        dic_dados[indicador] = valor

    dicionario['dados'] = dic_dados

    return dicionario


def sorteia():

    capitais = [
        '1200401',
        '2704302',
        '1600303',
        '1302603',
        '2927408',
        '2304400',
        '5300108',
        '3205309',
        '5208707',
        '2111300',
        '5103403',
        '5002704',
        '3106200',
        '4106902',
        '2507507',
        '1501402',
        '2611606',
        '2211001',
        '3304557',
        '2408102',
        '4314902',
        '1100205',
        '1400100',
        '4205407',
        '2800308',
        '3550308',
        '1721000',
    ]

    p1 = []
    p2 = []
    random.shuffle(capitais)
    for x in range(10):
        p1.append(capitais.pop())
        p2.append(capitais.pop())

    return [ p1, p2 ]




def getInformacoes():
    vetor = [ [], [] ]
    cidades = sorteia()

    for cont, x in enumerate(cidades):
        for y in x:
            dados = getInformacoesCidade(y)
            vetor[cont].append(dados)

    return vetor


listaMunicipios = getListaMunicipios()

vet = getInformacoes()

with open('dados.json','w') as f:
    json.dump(vet, f)


#a = getInformacoes('4305108')


#print a

# URL pesquisa por municipios
#
