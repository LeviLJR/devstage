const app = document.getElementById('app');
const users = [
    {
        email: 'test@g.com',
        phone: '123456789',
        ref: 100,
        refBy: null
    },
    {
        email: 'tessdst@g.com',
        phone: '113256789',
        ref: 200,
        refBy: 100
    }
]

const updateImageLinks = () => {
  document.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute("src"); 
    if (src && !src.startsWith("http")) {  
      img.src = `https://raw.githubusercontent.com/maykbrito/my-public-files/main/nlw-19/${src}`;
    }
  });
};

const getUser = (userData) => {
    return users.find((user) => {
        return user.email === userData.email}
    );
}

const getTotalSubscribers = (userData) => {
    const subs = users.filter((user)=>{
        return user.refBy == userData.ref && user.refBy != undefined;
    })
    return subs.length;
}

const showInvite = (userData) => {
    app.innerHTML = `
        <main>
            <h3>Registration Successful!</h3>
            <p>Invite more people and compete for prizes!
                <br>
                Share the link and follow the sign-ups:
            </p>
            <div class="input-group">
                <label for="link">
                    <img src="link.svg" alt="link icon" />
                    <input type="text" id="link" value="http://event.com?ref=${userData.ref}" disabled />
                </label>
            </div>
            <section class="status">
                <h4>${getTotalSubscribers(userData)}</h4>
                <p>Registrations done!</p>
            </section>    
        </main>
     `;
    app.setAttribute('class', 'page-invite');
    updateImageLinks();
}

const saveUser = (userData) => {
    const newUser = {
        ...userData,
        ref: Math.round(Math.random() * 4000),
        refBy: 100
    }
    users.push(newUser);
    return newUser;
}

const formAction = (e)=> {
    const form = document.getElementById('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form); 
        const userData = {
            email: formData.get('email'),
            phone: formData.get('phone'),
        }

        const user = getUser(userData);
        if(user){
            showInvite(user);
        } else {
            const newUser = saveUser(userData);
            showInvite(newUser);
        }
    }
}

const startApp = () => {
    const content = `
        <main>
                <section class="about">
                    <div class="section-header">
                        <h2>About the event</h2>
                        <span class="badge">LIVE</span>
                    </div>
                    <p>An event by and for developers who are passionate about 
                    creating innovative solutions and sharing knowledge. We'll 
                    dive into the latest trends in software development, systems 
                    architecture and emerging technologies, with talks, workshops
                    and hackathons.
                    <br><br>
                    March 15th to 17th | 6pm to 9pm | Online & Free</p>
                </section>
                <section class="registration">
                    <h2>Registration</h2>
                    <form id="form">
                        <div class="input-wraper">
                            <div class="input-group">
                                <label for="email">
                                    <img src="mail.svg" alt="e-mail icon">
                                </label>
                                <input type="email" id="email" name="email" placeholder="Enter your e-mail" required />
                            </div>
                            <div class="input-group">
                                <label for="phone">
                                    <img src="phone.svg" alt="phone icon">
                                </label>
                                <input type="text" id="phone" name="phone" placeholder="Enter your phone" required />
                            </div>
                        </div>
                        <button>
                            Confirm
                            <img src="arrow.svg" alt="arrow right">
                        </button>
                    </form>
                </section>
        </main>
    `
    app.innerHTML = content;
    app.setAttribute('class', 'page-home');
    updateImageLinks();
    formAction();

}

startApp();

document.getElementById('logo').onclick = () => {startApp()}