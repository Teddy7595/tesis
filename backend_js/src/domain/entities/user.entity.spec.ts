import { UserEntityFactory } from './user.entity';
import { UserEntityPropertyException, UserPasswordWeakException, UserPasswordLengthException } from '../exceptions/user.exceptions';

describe('UserEntityFactory.validatePassword', () =>
{
    test('acepta una contraseña válida (min 8, contiene minúscula, mayúscula y dígito)', () =>
    {
        const valid = () => UserEntityFactory['validatePassword']('Abcdefg1');
        expect(valid).not.toThrow();
    });

    test('rechaza contraseña sin mayúscula', () =>
    {
        const invalid = () => UserEntityFactory['validatePassword']('abcdefg1');
        expect(invalid).toThrow(UserPasswordWeakException);
    });

    test('rechaza contraseña sin minúscula', () =>
    {
        const invalid = () => UserEntityFactory['validatePassword']('ABCDEFG1');
        expect(invalid).toThrow(UserPasswordWeakException);
    });

    test('rechaza contraseña sin dígito', () =>
    {
        const invalid = () => UserEntityFactory['validatePassword']('Abcdefgh');
        expect(invalid).toThrow(UserPasswordWeakException);
    });

    test('rechaza contraseña demasiado corta', () =>
    {
        const invalid = () => UserEntityFactory['validatePassword']('Abc1');
        // ahora se espera UserPasswordLengthException para longitud fuera de rango
        expect(invalid).toThrow(UserPasswordLengthException);
    });

    test('rechaza contraseña demasiado larga', () =>
    {
        // generar cadena de longitud MAX_PASSWORD_LENGTH + 1
        const tooLong = 'A'.repeat(UserEntityFactory['MAX_PASSWORD_LENGTH'] + 1).replace(/A/, 'Aa1');
        const invalid = () => UserEntityFactory['validatePassword'](tooLong);
        expect(invalid).toThrow(UserPasswordLengthException);
    });

    test('lanza UserEntityPropertyException si password undefined o vacío', () =>
    {
        const invalid = () => UserEntityFactory['validatePassword'](undefined as any);
        expect(invalid).toThrow(UserEntityPropertyException);
    });
});
