import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologia</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li classname="dev-item">
            <header>
              <img src="https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.0-1/p160x160/81570477_3954799604546066_5590642333726015488_n.jpg?_nc_cat=109&_nc_ohc=XMhCvnV88x8AX9rvfl1&_nc_ht=scontent.fbnu2-1.fna&_nc_tp=1002&oh=f929f0d1838b7a36784c2c743f1c52af&oe=5E9C9F58" alt="Gregory Henrique"/>
              <div className="user-info">
                <strong>Gregory Henrique Alves</strong>
                <span>C#, Delphi, VBA, Python</span>
              </div>
            </header>
            <p>Programador fodão da porr@</p>
            <a href="https://www.linkedin.com/in/gregory-henrique-alves-06903086/">Acessar perfil do LinkedIn</a>
          </li>

          <li classname="dev-item">
            <header>
              <img src="https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.0-1/p160x160/81570477_3954799604546066_5590642333726015488_n.jpg?_nc_cat=109&_nc_ohc=XMhCvnV88x8AX9rvfl1&_nc_ht=scontent.fbnu2-1.fna&_nc_tp=1002&oh=f929f0d1838b7a36784c2c743f1c52af&oe=5E9C9F58" alt="Gregory Henrique"/>
              <div className="user-info">
                <strong>Gregory Henrique Alves</strong>
                <span>C#, Delphi, VBA, Python</span>
              </div>
            </header>
            <p>Programador fodão da porr@</p>
            <a href="https://www.linkedin.com/in/gregory-henrique-alves-06903086/">Acessar perfil do LinkedIn</a>
          </li>

          <li classname="dev-item">
            <header>
              <img src="https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.0-1/p160x160/81570477_3954799604546066_5590642333726015488_n.jpg?_nc_cat=109&_nc_ohc=XMhCvnV88x8AX9rvfl1&_nc_ht=scontent.fbnu2-1.fna&_nc_tp=1002&oh=f929f0d1838b7a36784c2c743f1c52af&oe=5E9C9F58" alt="Gregory Henrique"/>
              <div className="user-info">
                <strong>Gregory Henrique Alves</strong>
                <span>C#, Delphi, VBA, Python</span>
              </div>
            </header>
            <p>Programador fodão da porr@</p>
            <a href="https://www.linkedin.com/in/gregory-henrique-alves-06903086/">Acessar perfil do LinkedIn</a>
          </li>

          <li classname="dev-item">
            <header>
              <img src="https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.0-1/p160x160/81570477_3954799604546066_5590642333726015488_n.jpg?_nc_cat=109&_nc_ohc=XMhCvnV88x8AX9rvfl1&_nc_ht=scontent.fbnu2-1.fna&_nc_tp=1002&oh=f929f0d1838b7a36784c2c743f1c52af&oe=5E9C9F58" alt="Gregory Henrique"/>
              <div className="user-info">
                <strong>Gregory Henrique Alves</strong>
                <span>C#, Delphi, VBA, Python</span>
              </div>
            </header>
            <p>Programador fodão da porr@</p>
            <a href="https://www.linkedin.com/in/gregory-henrique-alves-06903086/">Acessar perfil do LinkedIn</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
