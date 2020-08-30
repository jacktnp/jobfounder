<template>
  <div>
    <div class="text-center">
      <b-button class="mx-auto bg-btn-gradient px-5 py-2" pill
        ><i class="far fa-plus"></i> New Post</b-button
      >
    </div>
    <hr />
    <div class="row mt-4">
      <div class="col-12" style="border-bottom: 1px solid rgb(217 217 217)">
        <!--  -->
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="3">
              <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                class="rounded-0 w-100 h-100"
              ></b-card-img>
            </b-col>
            <b-col md="9">
              <b-card-body title="My Portfolio">
                <small style="color: rgb(0 0 0 / 56%)">
                  <span><i class="far fa-clock"></i> 31 sep 2020 </span>
                  <span
                    ><i class="fad fa-check-circle" style="color: green;"></i>
                    T.Khim</span
                  >
                </small>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore aliquid distinctio voluptatibus.
                </p>
                <div class="d-flex justify-content-end mt-2">
                  <b-button
                    class="mr-2"
                    style="background: transparent;color: #6c757d;border:0px;"
                    ><i class="fas fa-trash-alt"></i
                  ></b-button>
                  <b-button class="px-1 py-0" pill>edit post</b-button>
                </div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>
