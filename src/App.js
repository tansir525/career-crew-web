import React from "react";
import { Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';

// Web Pages & Components
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Courses from './pages/Courses'
import Contact from "./pages/Contact";
import Materials from "./pages/Materials"
import LiveSessions from "./pages/LiveSessions"
import BecomeInstructor from "./pages/BecomeInstructor"
import Cart from "./pages/cart/Cart";
import Instructors from "./pages/Instructors"

// Dashboard Pages, Layout and Components
import DashboardLayout from './components/dashboardComponents/DashboardLayout'

//Admin
import AdminDashboard from "./pages/dashboard/admin/Dashboard"
import { CreateMaterials, MaterialList } from "./pages/dashboard/admin/Materials";
import InstructorList from "./pages/dashboard/admin/InstructorList"
import StudentList from "./pages/dashboard/admin/StudentList"

//Instructor
import InstructorDashboard from "./pages/dashboard/instructor/Dashboard"
import { CreateLiveSession, LiveSessionList } from "./pages/dashboard/instructor/LiveSession"
import InstructorProfile from "./pages/dashboard/instructor/Profile"
import { CreateListening, ListeningList } from "./pages/dashboard/instructor/Listening";
import { CreateReading, ReadingList } from "./pages/dashboard/instructor/Reading";
import { CreateWriting, WritingList } from "./pages/dashboard/instructor/Writing";
import { CreateSpeaking, SpeakingList } from "./pages/dashboard/instructor/Speaking";
import InstructorSettings from "./pages/dashboard/instructor/Settings"

//Student
import StudentDashboard from "./pages/dashboard/student/Dashboard"
import StudentProfile from "./pages/dashboard/student/Profile"
import StudentSettings from "./pages/dashboard/student/Settings"
import StudentListening from "./pages/dashboard/student/Listening"
import StudentReading from "./pages/dashboard/student/Reading"
import StudentWriting from "./pages/dashboard/student/Writing"
import StudentSpeaking from "./pages/dashboard/student/Speaking"
import StudentMaterial from "./pages/dashboard/student/Materials"
import StudentLiveSession from "./pages/dashboard/student/LiveSession"
// AuthService 
import AuthService from "./services/auth.service"


//Context



function App() {
  const requireLogin = (to, from, next) => {
    if (to.meta.auth && to.meta.isStudent) {

      if (AuthService.isLogedin() && AuthService.isStudent()) {
        next();
      }
      next.redirect('/login');
    }
    if (to.meta.auth && to.meta.isTeacher) {
      if (AuthService.isLogedin() && AuthService.isTeacher()) {
        next();
      }
      next.redirect('/login');
    }
    if (to.meta.auth && to.meta.isAdmin) {
      if (AuthService.isLogedin() && AuthService.isAdmin()) {
        next();
      }
      next.redirect('/login');
    }
    else {
      next();
    }
  };


  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <GuardedRoute {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}>
    </GuardedRoute>
  )

  return (
    <div className="App">
      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <AppRoute exact path="/" layout={Layout} component={Home} />

          <AppRoute exact path="/courses" layout={Layout} component={Courses} />

          <AppRoute exact path="/contact" layout={Layout} component={Contact} />
          <AppRoute exact path="/login" layout={Layout} component={Login} />
          <AppRoute exact path="/register" layout={Layout} component={Register} />
          <AppRoute exact path="/materials" layout={Layout} component={Materials} />
          <AppRoute exact path="/livesessions" layout={Layout} component={LiveSessions} />
          <AppRoute exact path="/become/instructor" layout={Layout} component={BecomeInstructor} />
          <AppRoute exact path="/instructors" layout={Layout} component={Instructors} />
          <AppRoute exact path="/cart" layout={Layout} component={Cart} />

          {/* Admin */}
          <AppRoute exact path="/dashboard/admin" layout={DashboardLayout} component={AdminDashboard} meta={{ auth: true, isAdmin: true }} />
          <AppRoute exact path="/dashboard/materiallist" layout={DashboardLayout} component={MaterialList} meta={{ auth: true, isAdmin: true }} />
          <AppRoute exact path="/dashboard/create/materia" layout={DashboardLayout} component={CreateMaterials} meta={{ auth: true, isAdmin: true }} />
          <AppRoute exact path="/dashboard/instructorlist" layout={DashboardLayout} component={InstructorList} meta={{ auth: true, isAdmin: true }} />
          <AppRoute exact path="/dashboard/studentlist" layout={DashboardLayout} component={StudentList} meta={{ auth: true, isAdmin: true }} />

          {/* Instructor */}

          <AppRoute exact path="/dashboard/instructor" layout={DashboardLayout} component={InstructorDashboard} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/instructor/livesession" layout={DashboardLayout} component={LiveSessionList} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/create/livesession" layout={DashboardLayout} component={CreateLiveSession} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/instructor/listening" layout={DashboardLayout} component={ListeningList} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/create/listening" layout={DashboardLayout} component={CreateListening} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/instructor/reading" layout={DashboardLayout} component={ReadingList} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/create/reading" layout={DashboardLayout} component={CreateReading} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/instructor/writing" layout={DashboardLayout} component={WritingList} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/create/writing" layout={DashboardLayout} component={CreateWriting} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/instructor/speaking" layout={DashboardLayout} component={SpeakingList} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/create/speaking" layout={DashboardLayout} component={CreateSpeaking} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/instructor/settings" layout={DashboardLayout} component={InstructorSettings} meta={{ auth: true, isTeacher: true }} />
          <AppRoute exact path="/dashboard/instructor/profile" layout={DashboardLayout} component={InstructorProfile} meta={{ auth: true, isTeacher: true }} />


          {/* Student */}
          <AppRoute exact path="/dashboard" layout={DashboardLayout} component={StudentDashboard} meta={{ auth: true, isStudent: true }} />
          <AppRoute exact path="/dashboard/student/profile" layout={DashboardLayout} component={StudentProfile} meta={{ auth: true, isStudent: true }} />
          <AppRoute exact path="/dashboard/student/settings" layout={DashboardLayout} component={StudentSettings} meta={{ auth: true, isStudent: true }} />
          <AppRoute exact path="/dashboard/student/listening" layout={DashboardLayout} component={StudentListening} meta={{ auth: true, isStudent: true }} />
          <AppRoute exact path="/dashboard/student/reading" layout={DashboardLayout} component={StudentReading} meta={{ auth: true, isStudent: true }} />
          <AppRoute exact path="/dashboard/student/writing" layout={DashboardLayout} component={StudentWriting} meta={{ auth: true, isStudent: true }} />
          <AppRoute exact path="/dashboard/student/Speaking" layout={DashboardLayout} component={StudentSpeaking} meta={{ auth: true, isStudent: true }} />
          <AppRoute exact path="/dashboard/student/Material" layout={DashboardLayout} component={StudentMaterial} meta={{ auth: true, isStudent: true }} />
          <AppRoute exact path="/dashboard/student/livesession" layout={DashboardLayout} component={StudentLiveSession} meta={{ auth: true, isStudent: true }} />

        </Switch>
      </GuardProvider>
    </div>
  );
}

export default App;
