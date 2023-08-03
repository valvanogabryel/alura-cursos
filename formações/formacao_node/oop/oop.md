# Programação Orientada a Objetos (OOP)

A Programação Orientada a Objetos (OOP/POO) é um paradigma de programação que organiza o código em objetos, unidades independentes que contêm dados e comportamentos relacionados. Os principais conceitos da OOP incluem:

- **Encapsulamento:** Os objetos encapsulam dados e comportamentos em uma única entidade, ocultando a implementação interna e expondo apenas a interface necessária.

- **Abstração:** Permite criar classes que representam objetos do mundo real, abstraindo seus detalhes complexos e fornecendo uma visão mais simplificada.

- **Herança:** Permite criar novas classes baseadas em classes existentes, herdando seus atributos e métodos. Isso promove a reutilização de código.

- **Polimorfismo:** Refere-se à capacidade de objetos de diferentes classes responderem ao mesmo método de maneiras diferentes, com base em sua implementação específica.

A OOP facilita o desenvolvimento de programas complexos, tornando-os mais organizados, modulares e extensíveis. Ela é amplamente utilizada em muitas linguagens de programação, como Java, Python e C++, para criar sistemas orientados a objetos, facilitando o design, manutenção e escalabilidade de projetos.

# SOLID - Princípios da Programação Orientada a Objetos

SOLID é um acrônimo que representa um conjunto de cinco princípios de design que ajudam a criar software mais legível, flexível e sustentável na Programação Orientada a Objetos (OOP).

## S - Princípio da Responsabilidade Única (Single Responsibility Principle)

Cada classe deve ter apenas uma única responsabilidade, ou seja, deve ter apenas um motivo para mudar. Isso garante que cada classe seja focada em uma tarefa específica, facilitando a manutenção e evitando problemas de acoplamento.

## O - Princípio do Aberto/Fechado (Open/Closed Principle)

As classes devem ser abertas para extensão, mas fechadas para modificação. Isso significa que você pode estender o comportamento da classe adicionando novos recursos, mas sem modificar o código existente, evitando assim efeitos colaterais indesejados.

## L - Princípio da Substituição de Liskov (Liskov Substitution Principle)

As subclasses devem poder ser usadas como substitutas de suas classes base, sem afetar a corretude do programa. Em outras palavras, uma classe derivada deve ser capaz de ser substituída pela classe base em qualquer situação sem causar problemas no programa.

## I - Princípio da Segregação de Interface (Interface Segregation Principle)

Uma classe não deve ser forçada a implementar interfaces que ela não usa. Em vez disso, as interfaces devem ser segregadas em conjuntos mais específicos, para que as classes possam implementar apenas o que é relevante para elas.

## D - Princípio da Inversão de Dependência (Dependency Inversion Principle)

As classes de alto nível não devem depender de classes de baixo nível, mas ambas devem depender de abstrações. Isso permite que o código seja mais flexível e fácil de modificar, pois as dependências podem ser trocadas por outras implementações sem afetar a lógica de alto nível.

Seguindo os princípios SOLID, você pode criar um código mais modular, coeso e adaptável, permitindo que suas aplicações sejam mais fáceis de manter e estender ao longo do tempo.
