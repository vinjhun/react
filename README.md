# react
A React Template Using HashRouter and TailWind Theme Mode


##### TailWind Card Template #####
###### how to tackle with long description text? ######

>**HTML**
```
<div class="card-container transition">
  <div class="flex min-h-[25vh] flex-col overflow-hidden rounded-md bg-slate-700 text-white shadow-md">
    <div class="card-header rounded-md">
      <img class="rounded-t-lg object-fill" src="https://th.bing.com/th/id/OIP.NA5S8-JF1ZpRiCa-03viCwHaE7?pid=ImgDet&rs=1" alt="" />
    </div>
    <div class="card-content flex flex-col justify-evenly">
      <div class="card-title text-center text-xl font-bold text-slate-100">I am content</div>
      <div class="card-body flex grow flex-col p-4">
        <div class="text-ellipsis">
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, this text cannot be too long</p>
        </div>
        <button class="m-2 min-w-[4rem] self-end rounded-full bg-[#A1887F] p-1 text-sm shadow-sm hover:bg-[#BCAAA4] hover:shadow-lg">More</button>
      </div>
    </div>
  </div>
  <div class="min-h-[25vh] rounded-md bg-slate-700 hover:bg-slate-600 hover:shadow-lg"></div>
</div>
```

>**CSS**
```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card-container {
    @apply container box-border grid grid-cols-4 gap-4 p-2 md:grid-cols-4 
  }
}
```
