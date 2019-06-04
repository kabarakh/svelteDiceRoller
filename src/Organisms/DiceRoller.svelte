<script>
  import InputForm from "../Molecules/InputForm";
  import OutputTable from "../Molecules/OutputTable";
</script>

<style>

</style>

<InputForm />
<div class="mt-2 mb-2 row">
  <button class="btn btn-secondary" (click)="clearDiceRolls()">
    Reset table
  </button>
</div>
<OutputTable />
