import React from 'react';
import './App.css';
import {useUserProfile} from "./hooks/useUserProfile";
import {UserProfile} from "./components/UserProfile";

/**
 * Задача.
 *
 * 1. Нарисовать форму просмотра пользователя (см. пример в {@link ../docs/user-profile-design.png})
 * 2. Добавить возможность редактирования формы используя функцию {@link updateProfile}
 * 3. Добавить реализацию спиннера, для обработки статуса загрузки.
 *
 * P.S. Карточка профиля лежит здесь {@link src/components/UserProfile/index.tsx}
 *
 * В первой итерации можно использовать pure CSS, а для усложнения ознакомится
 * с каким-нибудь фреймворком или набором компонентов, например:
 * - styled-components https://styled-components.com/
 * - tailwindcss https://tailwindcss.com/
 * - mui https://mui.com/
 *
 * */
function App() {
  const {isLoading, profile, updateProfile} = useUserProfile();

  return (
    <div className="app">
      {/* здесь добавить свою реализацию спиннера */}
      {isLoading && <p>loading...</p>}

      {!isLoading && <UserProfile profile={profile} updateProfile={updateProfile} />}
    </div>
  );
}

export default App;
