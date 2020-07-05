document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

function submit() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  var service_id = "default_service";

  const params = {
    reply_to: email,
    from_name: name,
    subject,
    message,
  };

  var template_id = "template_3HYPq8Hz";
  console.log(service_id, params, template_id);
  emailjs.send(service_id, template_id, params)
    .then(function(){ 
        alert("Thanks for Reaching Out!");
      }, function(err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });

  return false;
} 

function toggleModal(project) {
  console.log(project);
  const modal = document.getElementById(project);

  modal.classList.toggle('is-active');
}