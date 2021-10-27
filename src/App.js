import React from "react";

import { Accordion} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
    <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>¿Cuánto cuesta implementar Castor?</Accordion.Header>
      <Accordion.Body>
      Todos los servicios (exceptuando pagos de servicios) son completamente gratis para los usuarios siempre
       y cuando el empleador esté registrado con Castor. 
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>¿Quisiera saber si Castor está disponible como App en Play Store y App Store?</Accordion.Header>
      <Accordion.Body>
      Actualmente Castor cuenta con una aplicación web/web-app, por lo que no es necesario descargarla del App o Play Store.
      Puedes acceder a ella por medio de <a target="_blank" href="https://www.castor.app"> www.castor.app </a> desde cualquier navegador. 
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>¿Hay forma de monitorear los movimientos de cada colaborador y determinar los montos máximos de adelanto para cada colaborador?</Accordion.Header>
      <Accordion.Body>
      Desde el portal de Administrador se puede determinar montos máximos a dispersarse por grupo de colaboradores, monitorear montos dispersados por colaborador,
      establecer fechas de pago para automatizar cortes de ciclo, entre otras funcionalidades. 
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>¿Cuáles son los horarios de operación del servicio? </Accordion.Header>
      <Accordion.Body>
      Todas las operaciones permitidas en la aplicación están disponibles 24 horas al día los 7 días a la semana. 
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
      <Accordion.Header>¿Cómo gana Castor?</Accordion.Header>
      <Accordion.Body>
      Buscar el bienestar financiero de nuestros usuarios está en nuestro ADN, por lo que ofrecemos soluciones
      financieras para el corto, mediano y largo plazo. Cuando a los empleados les va bien, a las empresas les va bien. Cuando a las empresas les va bien, a Castor le va bien. 
      </Accordion.Body>
    </Accordion.Item>

  </Accordion>
  
  </div>
  );
}

export default App;
