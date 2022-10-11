<template>
  <div class="list-control">
    <b-row>
      <b-col
        cols="12"
        class="mb-5"
      >
        <h1 class="text-center">
          Controle da lista de animes
        </h1>
      </b-col>
      <b-col
        cols="12"
        lg="6"
        class="mb-3"
      >
        <h3 class="text-center">
          Todos os animes
        </h3>
        <b-table
          show-empty
          selectable
          class="mb-0"
          :fields="fields"
          :items="allItems"
          @row-selected="(value) => rowSelected('allItems', value)"
        >
          <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
          <template #empty>
            <b-alert
              show
              variant="warning"
              class="mb-0"
            >
              Não tem nenhum item adicionado!
            </b-alert>
          </template>
        </b-table>
      </b-col>
      <b-col
        cols="12"
        lg="6"
        class="mb-3"
      >
        <h3 class="text-center">
          Animes adicionados
        </h3>
        <b-table
          show-empty
          selectable
          class="mb-0"
          :fields="fields"
          :items="addedItems"
          @row-selected="(value) => rowSelected('addedItems', value)"
        >
          <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
          <template #empty>
            <b-alert
              show
              variant="warning"
              class="mb-0"
            >
              Não tem nenhum item adicionado!
            </b-alert>
          </template>
        </b-table>
      </b-col>
      <b-col
        cols="6"
        class="text-end"
      >
        <b-button
          variant="success"
          :disabled="allItemsSelected.length < 1 || addedItemsSelected.length > 0"
          @click="removeItems('allItems');addItems('addedItems', 'allItems');"
        >
          Adicionar
        </b-button>
      </b-col>
      <b-col
        cols="6"
        class="text-start"
      >
        <b-button
          variant="danger"
          :disabled="allItemsSelected.length > 0 || addedItemsSelected.length < 1"
          @click="removeItems('addedItems');addItems('allItems', 'addedItems');"
        >
          Remover
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script src="./scripts.js"></script> 
