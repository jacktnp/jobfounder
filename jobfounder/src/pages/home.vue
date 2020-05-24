<template>
  <b-container>
    <b-row>
        <b-col cols="4">Sidebar</b-col>
        <b-col cols="8">
            <!-- Jobs Loop -->
            <a href=""></a>
            <b-card title="Software Engineering" sub-title="Part time, Full time">
                <b-card-text>30,000 - 50,000 Baht | <b>Wongnai</b></b-card-text>
                <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">ดูรายละเอียดเพิ่มเติม</b-button>
            </b-card>
            <!-- Modal -->
            <b-modal id="bv-modal-example" size="lg" hide-footer>
                <template v-slot:modal-title>
                    Using <code>$bvModal</code> Methods
                </template>
                <div class="d-block text-center">
                    <h3>Hello From This Modal!</h3>
                </div>
                <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
            </b-modal>
            <!-- Jobs Loop -->
        </b-col>
    </b-row>
  </b-container>
</template>
