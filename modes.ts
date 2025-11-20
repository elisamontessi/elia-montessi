/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */
// Copyright 2024 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export default {
  'Legendas A/V': {
    emoji: '👀',
    prompt: `Para cada cena neste vídeo, gere legendas em português que descrevam a \
    cena, juntamente com qualquer texto falado entre aspas. Coloque cada \
    legenda em um objeto enviado para set_timecodes com o código de tempo da legenda \
    no vídeo.`,
    isList: true,
  },

  'Parágrafo': {
    emoji: '📝',
    prompt: `Gere um parágrafo em português que resuma este vídeo. Mantenha entre 3 a 5 \
frases. Coloque cada frase do resumo em um objeto enviado para \
set_timecodes com o código de tempo da frase no vídeo.`,
  },

  'Momentos chave': {
    emoji: '🔑',
    prompt: `Gere tópicos em português para o vídeo. Coloque cada tópico em um \
objeto enviado para set_timecodes com o código de tempo do tópico no vídeo.`,
    isList: true,
  },

  'Tabela': {
    emoji: '🤓',
    prompt: (input) =>
      `${input} chame set_timecodes_with_objects com o código de tempo, descrição de texto em português e uma lista de objetos visíveis na cena em português (com emojis representativos).`,
    subModes: {
      'Destaques': 'Escolha 5 cenas principais deste vídeo e',
      'Cronologia': 'Para cada cena neste vídeo,',
      'Resumo': 'Gere um resumo de 3 a 5 frases do vídeo. Para cada frase,',
    },
  },

  'Haicai': {
    emoji: '🌸',
    prompt: `Gere um haicai em português para o vídeo. Coloque cada linha do haicai em um \
objeto enviado para set_timecodes com o código de tempo da linha no vídeo. Certifique-se \
de seguir as regras de contagem de sílabas (5-7-5).`,
  },

  'Gráfico': {
    emoji: '📈',
    prompt: (input) =>
      `Gere dados de gráfico para este vídeo com base nas seguintes instruções: \
${input}. Chame set_timecodes_with_numeric_values uma vez com a lista de valores de dados e códigos de tempo.`,
    subModes: {
      'Empolgação':
        'para cada cena, estime o nível de empolgação em uma escala de 1 a 10',
      'Importância':
        'para cada cena, estime o nível de importância geral para o vídeo em uma escala de 1 a 10',
      'Número de pessoas': 'para cada cena, conte o número de pessoas visíveis',
    },
  },

  'Personalizado': {
    emoji: '🔧',
    prompt: (input) =>
      `Chame set_timecodes uma vez usando as seguintes instruções (responda em português se aplicável): ${input}`,
    isList: true,
  },
};
