<script>

</script>

<style>

</style>

<h2>Type in your dice roll</h2>
<div class="alert alert-info">
  You can use [count]d[type] or [count]w[type] and add or substract dice or
  modifiers
</div>

<form
  class="row justify-content-center"
  diceForm="ngForm"
  submit="submitDiceInput()">
  <div
    ngIf="diceInputField.invalid and (diceInputField.dirty or
    diceInputField.touched)"
    class="alert alert-danger col-8 col-push-4">

    <div ngIf="diceInputField.errors.required">Some input is required.</div>
    <div ngIf="diceInputField.errors.pattern">Invalid input.</div>
  </div>
  <div class="col-7">
    <input
      id="dice-input"
      autocomplete="off"
      name="dice-input"
      class="form-control"
      pattern="[ dw0-9+\-]+"
      required
      ngModel="diceInput"
      diceInputField="ngModel" />
  </div>
  <div class="col-4 row roll-buttons">
    <div class="col-6">
      <input
        class="btn btn-primary"
        type="submit"
        value="Submit"
        disabled="!diceForm.form.valid" />
    </div>
    <div class="col-6">
      <button
        class="btn btn-secondary"
        click="diceInputField.reset(); diceInput = '';">
        Reset input
      </button>
    </div>
  </div>
</form>
