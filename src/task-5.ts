// Завдання:

// Типізуй параметр status так, щоб дозволити тільки три конкретні рядкові значення: "loading", "success", "error"
// Переконайся, що TypeScript не дозволяє передати будь-яке інше значення.
// Типізуй повернення функції, зауваж що вона нічого явно не повертає.

//===================================================================//
type status = 'loading' | 'success' | 'error';

function logStatus(status: string): void {
  if (status === 'loading') {
    console.log('Loading...');
  } else if (status === 'success') {
    console.log('Success!');
  } else if (status === 'error') {
    console.log('Something went wrong');
  }
}

logStatus('loading');
