<template>
  <div class="border border-table-border px-6 py-3">
    <div class="table-container">
    <table class="border-collapse w-full bg-white text-left">
      <thead>
        <tr>
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody>
        <slot name="rows"></slot>
      </tbody>
    </table>
  </div>
  </div>
</template>

<style>
table {
  width: 100%;
  background: #ffffff;
  border-spacing: 0;
  border-collapse: collapse;
}

th {
  padding: 16px 12px;
  font-family: Nunito;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;  
  letter-spacing: -0.05px;
  color: #475467;
}

td {
  padding: 16px 12px;
  font-family: Nunito;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05px;
  color: #6b7280;
  border-bottom: 1px solid #e5e7eb;
}

input[type="checkbox"] {
  border-radius: 6px;
  border: 1px solid #d0d5dd;
  background: #fff;
  width: 20px;
  height: 20px;
}
</style>
