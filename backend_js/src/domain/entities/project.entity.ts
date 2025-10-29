// src/domain/proyecto/proyecto.entity.ts

export class Proyecto {

    private constructor(
        public readonly id: string,
        public name: string,
        public description: string,
        public isPublic: boolean,
        public ownerId: string, // ID del Usuario dueño
        private collaborators: string[] = [], // IDs de Usuarios
    ) { }

    // Lógica Agregada: Crea una instancia de Proyecto
    public static create(id: string, name: string, ownerId: string, isPublic: boolean = false): Proyecto {
        // Aquí puedes poner validaciones de dominio (ej: el nombre no puede estar vacío)
        return new Proyecto(id, name, 'Descripción por defecto', isPublic, ownerId);
    }

    // Lógica de Dominio: Determinar si un usuario tiene acceso
    public hasAccess(userId: string): boolean {
        // El dueño siempre tiene acceso total
        if (this.ownerId === userId) return true;

        // Si es público, se permite acceso (quizás solo lectura, la política se define en Casos de Uso)
        if (this.isPublic) return true;

        // Si es colaborador, tiene acceso
        return this.collaborators.includes(userId);
    }

    // Lógica de Dominio: Agregar un colaborador
    public addCollaborator(userId: string): void {
        if (!this.collaborators.includes(userId)) {
            this.collaborators.push(userId);
        }
    }
}