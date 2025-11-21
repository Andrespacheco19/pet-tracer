import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common'

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
   imports: [CommonModule,MatIconModule, NgOptimizedImage],
})
export class InicioComponent implements OnInit {
  // State variables
  isMenuOpen: boolean = false;
  showLogin: boolean = false;
  showRegister: boolean = false;
  showPassword: boolean = false;

  // Data
  loginData: LoginData = {
    email: '',
    password: ''
  };

  registerData: RegisterData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  features: Feature[] = [
    {
      icon: 'camera_alt',
      title: 'Monitoreo 24/7',
      desc: 'Vigilancia continua en tiempo real con cámaras HD'
    },
    {
      icon: 'notifications',
      title: 'Alertas Instantáneas',
      desc: 'Notificaciones inmediatas ante comportamientos inusuales'
    },
    {
      icon: 'security',
      title: 'Detección con IA',
      desc: 'Inteligencia artificial que aprende el comportamiento de tu mascota'
    },
    {
      icon: 'schedule',
      title: 'Historial Completo',
      desc: 'Accede a grabaciones y registros de actividad'
    },
    {
      icon: 'smartphone',
      title: 'App Móvil',
      desc: 'Controla todo desde tu smartphone, en cualquier lugar'
    },
    {
      icon: 'favorite',
      title: 'Bienestar Animal',
      desc: 'Diseñado con ética y respeto hacia los animales'
    }
  ];

  values: string[] = [
    'Innovación',
    'Confianza',
    'Responsabilidad',
    'Calidad'
  ];

  constructor() { }

  ngOnInit(): void {
    // Inicialización del componente
  }

  // Menu methods
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Login methods
  openLogin(): void {
    this.showLogin = true;
    this.showRegister = false;
    this.isMenuOpen = false;
  }

  closeLogin(): void {
    this.showLogin = false;
    this.resetLoginForm();
  }

  handleLogin(): void {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.loginData.email)) {
      alert('Por favor ingresa un correo electrónico válido');
      return;
    }

    // Aquí implementarías la lógica de autenticación con tu servicio
    console.log('Login attempt:', this.loginData);
    alert(`Funcionalidad de login - Email: ${this.loginData.email}`);
    
    this.closeLogin();
  }

  resetLoginForm(): void {
    this.loginData = {
      email: '',
      password: ''
    };
    this.showPassword = false;
  }

  // Register methods
  openRegister(): void {
    this.showRegister = true;
    this.showLogin = false;
    this.isMenuOpen = false;
  }

  closeRegister(): void {
    this.showRegister = false;
    this.resetRegisterForm();
  }

  handleRegister(): void {
    if (!this.registerData.name || !this.registerData.email || 
        !this.registerData.password || !this.registerData.confirmPassword) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.registerData.email)) {
      alert('Por favor ingresa un correo electrónico válido');
      return;
    }

    // Validación de contraseña
    if (this.registerData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Validación de coincidencia de contraseñas
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí implementarías la lógica de registro con tu servicio
    console.log('Register attempt:', this.registerData);
    alert(`Registro exitoso - Usuario: ${this.registerData.name}`);
    
    this.closeRegister();
  }

  resetRegisterForm(): void {
    this.registerData = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  // Toggle password visibility
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  // Switch between modals
  switchToRegister(): void {
    this.showLogin = false;
    this.showRegister = true;
    this.resetLoginForm();
  }

  switchToLogin(): void {
    this.showRegister = false;
    this.showLogin = true;
    this.resetRegisterForm();
  }
}