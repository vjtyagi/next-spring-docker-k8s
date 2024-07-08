FROM maven:3.9.8-eclipse-temurin-22
WORKDIR /opt/app
COPY pom.xml .
RUN mvn dependency:resolve
COPY src ./src
RUN mvn clean package spring-boot:repackage
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]