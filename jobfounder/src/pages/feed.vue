<template>
    <div class="container my-5">
        <h2>Job Feed</h2>
        <hr>
        <div class="row mt-4">
            <div class="col-lg-6" style="border-bottom: 1px solid rgb(217 217 217)">
                <!--  -->
                <b-card no-body class="overflow-hidden" style="background: transparent;border: 0px;">
                    <b-row no-gutters>
                    <b-col md="3">
                        <b-img thumbnail src="https://picsum.photos/400/400/?image=20" rounded="circle"></b-img>
                    </b-col>
                    <b-col md="9">
                        <b-card-body title="Job Title">
                            <small style="color: rgb(0 0 0 / 56%)"><i class="far fa-clock"></i> 31 sep 2020</small>
                            <b-card-text>
                                This is desription.
                                This is desription.
                                This is desription.
                                This is desription.
                            </b-card-text>
                            <b-button type="submit" class="bg-btn-gradient px-4 py-1" pill>Read</b-button>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
                <!--  -->
            </div>
        </div>
    </div>
</template>