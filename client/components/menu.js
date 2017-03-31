export default {
  selector: 'menu',
  template: `
  <aside>
    <ul>
      <li class="logo">
        <img src="/public/img/keep-calm.png" alt="Keep calm, keep organised" />
      </li>
      <li>
        <a ui-sref="home" ui-sref-active="active">
          <i class="fa fa-calendar"></i>
          <span>All sessions</span>
        </a>
      </li>
      <li>
        <a ui-sref="create" ui-sref-active="active">
          <i class="fa fa-calendar-plus-o"></i>
          <span>Create session</span>
        </a>
      </li>
      <li>
        <a ui-sref="account" ui-sref-active="active">
          <i class="fa fa-user-o"></i>
          <span>My account</span>
        </a>
      </li>
    </ul>
  </aside>
  `
}