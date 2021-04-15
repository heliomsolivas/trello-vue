import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'to do',
      tasks: [
        {
          description: '',
          name: 'Separar marcas desejadas por segmento',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Criar novo Aplicativo',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Verificar métricas do GA',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'Criação de Log de Campanhas',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Edição de campanhas finalizadas',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'Alterar logo do App',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
