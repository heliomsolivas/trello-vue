<template>
  <div
    class="header bg-teal-darker flex items-center justify-center text-white"
  >
    <div class="header__left"></div>
    <div
      class="header__logo font-bold text-white"
      aria-label="Voltar ao Início"
    >
      Héllio
    </div>
    <div class="header__right">
      <button
        class="rounded-sm p-2 px-4 bg-green text-white text-sm font-bold hover:bg-green-dark"
      >
        Cadastrar-se
      </button>
      <button
        class="rounded-sm p-2 px-4 bg-green text-white text-sm font-bold hover:bg-green-dark"
      >
        Fazer Login
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
header {
  height: 36px;
}
.header {
  display: flex;
  height: 40px;
  overflow: hidden;
}
.header__left {
  display: flex;
  flex-grow: 1;
  flex-basis: 100%;
}
.header__logo {
  display: block;
  position: relative;
  flex-shrink: 0;
  letter-spacing: 1.2px;
  font-size: 18px;
  opacity: 0.6;
}
.header__right {
  display: flex;
  flex-grow: 1;
  flex-basis: 100%;
  justify-content: flex-end;
}
.header__right button {
  height: 32px;
  margin-right: 4px;
}
.logo {
  letter-spacing: 1.2px;
  font-size: 18px;
  opacity: 0.6;
}
</style>
