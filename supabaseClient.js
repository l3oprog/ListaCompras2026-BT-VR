// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://jvpjhhumccsrnlcxkkep.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cGpoaHVtY2Nzcm5sY3hra2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTIwNzAsImV4cCI6MjA4NzY4ODA3MH0.7BSw0klPXB8Ppang82swscRQLNihN67JAjNJVtYiODA'

)
